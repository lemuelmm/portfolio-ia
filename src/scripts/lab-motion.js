// Toolkit de motion do /lab — sem dependências, progressive enhancement.
// Tudo aqui degrada com graça: sem JS, o conteúdo aparece estático e legível.
// Tudo aqui respeita prefers-reduced-motion: nada de movimento para quem pediu calma.

const prefersReduced = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const supportsHover = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

/**
 * Revela elementos quando entram na viewport (adiciona .is-in).
 * Marque com [data-reveal] (ou um seletor próprio).
 */
export function initReveals(selector = '[data-reveal], [data-reveal-stagger], .bar-draw') {
  const els = [...document.querySelectorAll(selector)];
  if (prefersReduced() || !('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const reveal = (el) => el.classList.add('is-in');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );
  els.forEach((el) => io.observe(el));

  // Rede de segurança: conteúdo NUNCA pode ficar invisível.
  // O IntersectionObserver pode não amostrar uma seção em scroll muito rápido,
  // salto por âncora ou refresh com scroll restaurado. A varredura abaixo revela
  // qualquer elemento que já entrou (ou passou) pela viewport.
  let pending = els;
  const sweep = () => {
    pending = pending.filter((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
        reveal(el);
        io.unobserve(el);
        return false;
      }
      return true;
    });
    if (!pending.length) {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
  };
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      sweep();
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  sweep();
}

/**
 * Conta um número de 0 até data-count-to quando entra na viewport.
 * Suporta data-count-prefix e data-count-suffix. Dispara evento "countdone".
 */
export function initCountUp(selector = '[data-count-to]') {
  const els = [...document.querySelectorAll(selector)];
  const run = (el) => {
    const to = parseFloat(el.dataset.countTo);
    const prefix = el.dataset.countPrefix ?? '';
    const suffix = el.dataset.countSuffix ?? '';
    if (prefersReduced()) {
      el.textContent = prefix + to + suffix;
      el.dispatchEvent(new CustomEvent('countdone'));
      return;
    }
    const dur = Number(el.dataset.countDur ?? 1200);
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = prefix + Math.round(easeOutCubic(p) * to) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.dispatchEvent(new CustomEvent('countdone'));
    };
    requestAnimationFrame(tick);
  };
  if (!('IntersectionObserver' in window)) {
    els.forEach(run);
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          run(e.target);
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  els.forEach((el) => io.observe(el));
}

const GLYPHS = '!<>-_\\/[]{}—=+*^?#·:0123456789ABCDEFGHJKLMNPRSTUVWXYZ';

/**
 * Efeito de "decodificação": revela `text` a partir de glifos aleatórios.
 * Retorna uma Promise que resolve no fim.
 */
export function scramble(el, text, duration = 900) {
  if (prefersReduced()) {
    el.textContent = text;
    return Promise.resolve();
  }
  const chars = [...text];
  const start = performance.now();
  return new Promise((resolve) => {
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const reveal = Math.floor(p * chars.length);
      let out = '';
      for (let i = 0; i < chars.length; i++) {
        if (chars[i] === ' ') out += ' ';
        else if (i < reveal) out += chars[i];
        else out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      el.textContent = out;
      if (p < 1) requestAnimationFrame(tick);
      else {
        el.textContent = text;
        resolve();
      }
    };
    requestAnimationFrame(tick);
  });
}

/** Decodifica elementos [data-scramble] quando entram na viewport. */
export function initScrambleOnView(selector = '[data-scramble]') {
  const els = [...document.querySelectorAll(selector)];
  els.forEach((el) => {
    el.dataset.text = el.textContent;
  });
  if (prefersReduced() || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          scramble(e.target, e.target.dataset.text, Number(e.target.dataset.scrambleDur ?? 900));
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  els.forEach((el) => io.observe(el));
}

/** Decodifica no hover. Bom para links. */
export function initHoverScramble(selector = '[data-hover-scramble]') {
  if (prefersReduced()) return;
  document.querySelectorAll(selector).forEach((el) => {
    const text = el.textContent;
    let busy = false;
    el.addEventListener('mouseenter', () => {
      if (busy) return;
      busy = true;
      scramble(el, text, 480).then(() => {
        busy = false;
      });
    });
  });
}

/**
 * Tipografia magnética: cada letra se inclina e cresce perto do cursor.
 * Só em ponteiro fino (desktop) e com movimento permitido.
 */
export function initMagneticType(selector = '[data-magnetic]', radius = 130, strength = 0.45) {
  if (prefersReduced() || !supportsHover()) return;
  const groups = [...document.querySelectorAll(selector)];
  if (!groups.length) return;

  groups.forEach((group) => {
    const text = group.textContent;
    group.textContent = '';
    [...text].forEach((ch) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = ch === ' ' ? ' ' : ch;
      group.appendChild(span);
    });
  });

  const spans = groups.flatMap((g) => [...g.querySelectorAll('.char')]);
  let mx = -9999;
  let my = -9999;
  let raf = null;

  const update = () => {
    spans.forEach((s) => {
      const r = s.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = mx - cx;
      const dy = my - cy;
      const dist = Math.hypot(dx, dy);
      if (dist < radius) {
        const f = (1 - dist / radius) * strength;
        s.style.transform = `translate(${dx * f * 0.5}px, ${dy * f * 0.5}px) scale(${1 + f * 0.7})`;
      } else {
        s.style.transform = '';
      }
    });
    raf = null;
  };

  window.addEventListener('pointermove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    if (!raf) raf = requestAnimationFrame(update);
  });
  window.addEventListener('pointerleave', () => {
    mx = my = -9999;
    if (!raf) raf = requestAnimationFrame(update);
  });
}

/**
 * Quebra o texto de um elemento em letras animáveis (.char com --i sequencial).
 * Usado para stagger de entrada via CSS.
 */
export function splitChars(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    const text = el.textContent;
    el.textContent = '';
    el.setAttribute('aria-label', text);
    [...text].forEach((ch, i) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.setAttribute('aria-hidden', 'true');
      span.style.setProperty('--i', String(i));
      span.textContent = ch === ' ' ? ' ' : ch;
      el.appendChild(span);
    });
  });
}
