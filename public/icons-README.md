# Icônes JSGC

Ce dossier contient les icônes et logos pour le site JSGC.

## Fichiers d'icônes

### SVG (Vecteurs)

- `logo.svg` - Logo principal JSGC (512x512)
- `favicon.svg` - Favicon SVG (32x32)

### PNG (À générer)

Les fichiers PNG peuvent être générés automatiquement à partir des SVG :

```bash
chmod +x scripts/generate-icons.sh
./scripts/generate-icons.sh
```

Cette commande créera :

- `favicon.ico` - Favicon multi-tailles
- `favicon-16x16.png` - Petit favicon
- `favicon-32x32.png` - Favicon standard
- `apple-touch-icon.png` - Icône iOS (180x180)
- `icon-192.png` - Android Chrome (192x192)
- `icon-512.png` - Android Chrome (512x512)
- `mstile-150x150.png` - Tuile Windows (150x150)

## Prérequis

Pour générer les PNG, ImageMagick doit être installé :

```bash
# macOS
brew install imagemagick

# Ubuntu/Debian
sudo apt-get install imagemagick

# Windows
# Télécharger depuis https://imagemagick.org/script/download.php
```

## Alternative : Génération en ligne

Si vous ne pouvez pas installer ImageMagick, utilisez ces outils en ligne :

1. Ouvrez `logo.svg` dans un éditeur de texte
2. Copiez le contenu
3. Allez sur https://cloudconvert.com/svg-to-png
4. Collez le SVG et générez les tailles nécessaires

## Design

### Couleurs

- Vert forêt : `#2E7D32`
- Brun bois : `#8D6E63`
- Fond clair : `#FAFAFA`

### Éléments

- Arbres (pins/sapins) représentant le bois de chauffage
- Camion représentant le service de transport
- Texte "JSGC" en police sans-serif

## Utilisation dans le code

### Composant React

```tsx
import { TruckIcon, FireIcon, TreeIcon } from "@/components/Icons";

<TruckIcon className="w-8 h-8 text-green-700" />;
```

### Image

```tsx
import Image from "next/image";

<Image src="/logo.svg" alt="JSGC" width={200} height={200} />;
```
