#!/usr/bin/env python3
"""Gera o PDF do CV a partir de cv-ifood.html usando WeasyPrint.

Uso: python3 build-cv.py
Saida: Lemuel-Monteiro-CV-iFood.pdf (na mesma pasta)
"""
import os
from weasyprint import HTML

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "cv-ifood.html")
OUT = os.path.join(HERE, "Lemuel-Monteiro-CV-iFood.pdf")

HTML(filename=SRC, base_url=HERE).write_pdf(OUT)

size_kb = os.path.getsize(OUT) / 1024
print(f"PDF gerado: {OUT}")
print(f"Tamanho: {size_kb:.1f} KB")
