#!/bin/bash

# Script pour générer les icônes PNG à partir du SVG
# Nécessite ImageMagick: brew install imagemagick

echo "Génération des icônes PNG..."

# Vérifier si ImageMagick est installé
if ! command -v convert &> /dev/null; then
    echo "⚠️  ImageMagick n'est pas installé."
    echo "Installez-le avec: brew install imagemagick"
    exit 1
fi

cd "$(dirname "$0")/.."

# Favicon
convert -density 1200 -background transparent public/favicon.svg -resize 32x32 public/favicon-32x32.png
convert -density 1200 -background transparent public/favicon.svg -resize 16x16 public/favicon-16x16.png

# Apple Touch Icons
convert -density 1200 -background transparent public/logo.svg -resize 180x180 public/apple-touch-icon.png

# Android Chrome Icons
convert -density 1200 -background transparent public/logo.svg -resize 192x192 public/icon-192.png
convert -density 1200 -background transparent public/logo.svg -resize 512x512 public/icon-512.png

# Microsoft Tile
convert -density 1200 -background transparent public/logo.svg -resize 150x150 public/mstile-150x150.png

# Favicon ICO (multi-size)
convert -density 1200 -background transparent public/favicon.svg \
  \( -clone 0 -resize 16x16 \) \
  \( -clone 0 -resize 32x32 \) \
  \( -clone 0 -resize 48x48 \) \
  -delete 0 public/favicon.ico

echo "✅ Toutes les icônes ont été générées avec succès!"
echo ""
echo "Fichiers créés:"
echo "  - favicon.ico"
echo "  - favicon-16x16.png"
echo "  - favicon-32x32.png"
echo "  - apple-touch-icon.png (180x180)"
echo "  - icon-192.png"
echo "  - icon-512.png"
echo "  - mstile-150x150.png"
