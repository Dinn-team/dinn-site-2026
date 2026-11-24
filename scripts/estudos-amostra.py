"""Amostra de um estudo de mercado: até 5 páginas do PDF viram imagens PNG.

Chamado por scripts/estudos-sync.mjs. Precisa do PyMuPDF:
    python -m pip install --user pymupdf

Uso:
    python -P scripts/estudos-amostra.py <pdf> <pasta-de-saida> <largura-px>

Páginas escolhidas (PDF no padrão ABNT da Sarah, no Orion):
    capa, resumo no idioma do PDF, sumário e as primeiras páginas da Introdução.
Se o PDF não tiver essas marcas, usa as primeiras páginas.
Imprime em JSON a lista de páginas (1 = primeira) e o total de páginas.
"""

import json
import os
import sys

import pymupdf

MAX_PAGES = 5
MIN_TEXT = 900  # caracteres; abaixo disso a página é quase só espaço em branco
SUMMARY = ("SUMÁRIO", "SUMARIO", "CONTENTS", "TABLE OF CONTENTS", "ÍNDICE", "INDICE")
ABSTRACT = ("RESUMO", "RESUMEN", "ABSTRACT")


def first_line(page):
    for line in page.get_text().splitlines():
        line = line.strip()
        if line and line.upper() != "DINN":
            return line.upper()
    return ""


def pick_pages(doc):
    heads = [first_line(doc[i]) for i in range(doc.page_count)]
    picked = [0]
    abstract = next((i for i, h in enumerate(heads) if h in ABSTRACT), None)
    summary = next((i for i, h in enumerate(heads) if h in SUMMARY), None)
    if abstract is not None:
        picked.append(abstract)
    if summary is not None:
        picked.append(summary)
        # O sumário pode ocupar mais de uma página: a Introdução é a primeira
        # página depois dele que começa com "1 ".
        start = next((i for i in range(summary + 1, doc.page_count) if heads[i].startswith("1 ")), summary + 1)
        # Página quase vazia (fim de seção) não mostra nada: pula para a próxima.
        i = start
        while len(picked) < MAX_PAGES and i < doc.page_count:
            if len(doc[i].get_text().strip()) >= MIN_TEXT:
                picked.append(i)
            i += 1
    i = 1
    while len(picked) < min(MAX_PAGES, doc.page_count):
        if i not in picked:
            picked.append(i)
        i += 1
    return sorted(set(picked))[:MAX_PAGES]


def main():
    pdf, out_dir, width = sys.argv[1], sys.argv[2], int(sys.argv[3])
    os.makedirs(out_dir, exist_ok=True)
    doc = pymupdf.open(pdf)
    pages = pick_pages(doc)
    for n, index in enumerate(pages, start=1):
        page = doc[index]
        zoom = width / page.rect.width
        pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
        pix.save(os.path.join(out_dir, f"{n}.png"))
    print(json.dumps({"pages": [p + 1 for p in pages], "total": doc.page_count}))


if __name__ == "__main__":
    main()
