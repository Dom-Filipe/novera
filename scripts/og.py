#!/usr/bin/env python3
"""
Gera as imagens de prévia (Open Graph) usadas quando um link da Novera é
compartilhado no WhatsApp, Instagram ou X.

- og/<id>.jpg : cópia em JPG (1200x630) de cada foto em fotos/<id>.webp
- og/padrao.jpg : imagem padrão da marca, para notícias sem foto

Uso: python3 scripts/og.py   (precisa do Pillow: pip install pillow)
"""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOTOS = os.path.join(ROOT, 'fotos')
OG = os.path.join(ROOT, 'og')
W, H = 1200, 630
NAVY = (16, 42, 67)

os.makedirs(OG, exist_ok=True)


def cover(im):
    """Recorta e redimensiona para 1200x630 sem distorcer."""
    im = im.convert('RGB')
    r = W / H
    w, h = im.size
    if w / h > r:
        nw = round(h * r)
        im = im.crop(((w - nw) // 2, 0, (w - nw) // 2 + nw, h))
    else:
        nh = round(w / r)
        im = im.crop((0, (h - nh) // 2, w, (h - nh) // 2 + nh))
    return im.resize((W, H), Image.LANCZOS)


def fonte(tamanho, negrito=True):
    candidatos = [
        '/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf' if negrito else '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf',
        '/usr/share/fonts/truetype/liberation/LiberationSerif-Bold.ttf',
    ]
    for c in candidatos:
        if os.path.exists(c):
            return ImageFont.truetype(c, tamanho)
    return ImageFont.load_default()


feitas = 0
for f in sorted(os.listdir(FOTOS)) if os.path.isdir(FOTOS) else []:
    if not f.endswith('.webp'):
        continue
    destino = os.path.join(OG, f[:-5] + '.jpg')
    origem = os.path.join(FOTOS, f)
    if os.path.exists(destino) and os.path.getmtime(destino) >= os.path.getmtime(origem):
        continue
    cover(Image.open(origem)).save(destino, 'JPEG', quality=85, optimize=True, progressive=True)
    feitas += 1

padrao = os.path.join(OG, 'padrao.jpg')
if not os.path.exists(padrao):
    im = Image.new('RGB', (W, H), NAVY)
    d = ImageDraw.Draw(im)
    d.rectangle([0, H - 18, W, H], fill=(240, 180, 41))
    f1, f2 = fonte(150), fonte(36, False)
    t1, t2 = 'Novera', 'INFORMAÇÃO SEM FRONTEIRAS'
    w1 = d.textlength(t1, font=f1)
    w2 = d.textlength(t2, font=f2)
    d.text(((W - w1) / 2, 190), t1, font=f1, fill=(255, 255, 255))
    d.text(((W - w2) / 2, 380), t2, font=f2, fill=(201, 214, 227))
    im.save(padrao, 'JPEG', quality=88)
    feitas += 1

print(f'og: {feitas} imagem(ns) gerada(s)')
