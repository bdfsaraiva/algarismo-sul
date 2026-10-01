"""Generate web-ready brand assets from the original Algarismo Sul logo PNGs.

The source logos (``Algarismo Sul - Logos PNG/``) are 1563x1563 squares with a
solid background. This script crops them to their content and converts the
background into transparency so they can sit on any section colour.

Usage:
    python scripts/prepare-brand.py
"""

from __future__ import annotations

import logging
from pathlib import Path

from PIL import Image

logger = logging.getLogger(__name__)

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "Algarismo Sul - Logos PNG"
OUT = ROOT / "public" / "brand"
PUBLIC = ROOT / "public"

NAVY = (0, 34, 80)
WHITE = (255, 255, 255)
PADDING = 8


def knock_out(img: Image.Image, bg: tuple[int, int, int], fg: tuple[int, int, int]) -> Image.Image:
    """Turn ``bg`` into transparency, keeping anti-aliased edges as partial alpha.

    Each pixel's alpha is its distance from ``bg`` relative to the distance
    between ``bg`` and ``fg``; the colour is then forced to ``fg``.
    """
    rgb = img.convert("RGB")
    span = sum(abs(f - b) for f, b in zip(fg, bg))
    out = Image.new("RGBA", rgb.size)
    src_px = rgb.load()
    dst_px = out.load()
    for y in range(rgb.height):
        for x in range(rgb.width):
            px = src_px[x, y]
            dist = sum(abs(p - b) for p, b in zip(px, bg))
            alpha = max(0, min(255, round(255 * dist / span)))
            dst_px[x, y] = (*fg, alpha)
    return out


def trim(img: Image.Image) -> Image.Image:
    """Crop to the non-transparent bounding box plus a small padding."""
    box = img.getchannel("A").point(lambda a: 255 if a > 8 else 0).getbbox()
    if box is None:
        raise ValueError("Image is fully transparent after knock-out")
    left, top, right, bottom = box
    return img.crop((
        max(0, left - PADDING),
        max(0, top - PADDING),
        min(img.width, right + PADDING),
        min(img.height, bottom + PADDING),
    ))


def save_variants(img: Image.Image, name: str, height: int) -> None:
    """Save 1x and 2x PNG + WebP at the given display height."""
    for scale, suffix in ((1, ""), (2, "@2x")):
        h = height * scale
        w = round(img.width * h / img.height)
        resized = img.resize((w, h), Image.LANCZOS)
        resized.save(OUT / f"{name}{suffix}.png", optimize=True)
        resized.save(OUT / f"{name}{suffix}.webp", quality=92, method=6)
    logger.info("saved %s (%dpx tall)", name, height)


def main() -> None:
    logging.basicConfig(level=logging.INFO, format="%(message)s")
    OUT.mkdir(parents=True, exist_ok=True)

    # Horizontal lockup: navy on white (4.png) -> for light backgrounds.
    horizontal = trim(knock_out(Image.open(SRC / "4.png"), WHITE, NAVY))
    save_variants(horizontal, "logo-horizontal", 64)

    # Same lockup, white on navy (3.png) -> for navy sections / footer.
    horizontal_white = trim(knock_out(Image.open(SRC / "3.png"), NAVY, WHITE))
    save_variants(horizontal_white, "logo-horizontal-white", 64)

    # Favicons from the logo currently in use (1.png == favicon.png).
    fav = Image.open(SRC / "1.png").convert("RGB")
    # Crop to the framed square so the monogram is legible at small sizes.
    frame = fav.crop((470, 410, 1093, 1133)).resize((512, 512), Image.LANCZOS)
    for size, name in ((32, "favicon-32.png"), (180, "apple-touch-icon.png"), (512, "icon-512.png")):
        frame.resize((size, size), Image.LANCZOS).save(PUBLIC / name, optimize=True)
    frame.resize((48, 48), Image.LANCZOS).save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48)])

    # Open Graph image 1200x630: white lockup centred on navy.
    og = Image.new("RGB", (1200, 630), NAVY)
    lock = horizontal_white.copy()
    target_w = 860
    lock = lock.resize((target_w, round(lock.height * target_w / lock.width)), Image.LANCZOS)
    og.paste(lock, ((1200 - lock.width) // 2, (630 - lock.height) // 2), lock)
    og.save(PUBLIC / "og-image.png", optimize=True)
    logger.info("saved favicons and og-image.png")


if __name__ == "__main__":
    main()
