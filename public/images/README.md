# Images pour le site JSGC

Ce dossier doit contenir les images du site web.

## 📸 Images requises

### Page d'accueil

- `hero-bg.jpg` - Image de fond pour la section hero (1920x1080px recommandé)
  - Suggestion: Paysage forestier, pile de bois, ou camion dans la nature

### Galerie

Ajoutez 6-12 photos de qualité montrant:

- `wood-stack-1.jpg`, `wood-stack-2.jpg` - Piles de bois de chauffage bien rangées
- `truck-1.jpg` - Camion de livraison JSGC
- `wood-cutting.jpg` - Processus de coupe de bois
- `delivery.jpg` - Livraison en action
- `wood-types.jpg` - Différents types de bois (érable, bouleau, mélangé)
- `maple-wood.jpg` - Gros plan sur bois d'érable
- `birch-wood.jpg` - Gros plan sur bois de bouleau
- `mixed-wood.jpg` - Bois mélangé
- `facility.jpg` - Installations/entrepôt
- `team.jpg` - Photo d'équipe (optionnel)

### Logo (optionnel)

- `logo.svg` ou `logo.png` - Logo JSGC (transparent si PNG)

## 📏 Spécifications techniques

- **Format recommandé**: JPG pour photos, PNG pour logos/graphiques
- **Taille maximale**: 500KB par image (compressées)
- **Dimensions recommandées**:
  - Hero: 1920x1080px
  - Galerie: 800x800px (format carré)
  - Logo: 200x200px

## 🛠️ Outils de compression

Avant d'uploader, compressez vos images:

- **En ligne**: https://tinypng.com ou https://squoosh.app
- **Logiciel**: ImageOptim (Mac), RIOT (Windows)

## 🔄 Comment ajouter les images

1. Placez vos images dans ce dossier (`public/images/`)
2. Les noms de fichiers doivent correspondre à ceux listés ci-dessus
3. Ou modifiez les chemins dans le code:
   - Hero: `components/Hero.tsx`
   - Galerie: `app/galerie/page.tsx`

## 📝 Note

Actuellement, le site utilise des placeholders (dégradés de couleur) pour toutes les images.
Une fois que vous aurez ajouté vos vraies images, elles remplaceront automatiquement les placeholders.

## ⚠️ Droits d'auteur

Assurez-vous d'avoir les droits sur toutes les images que vous utilisez.

- Utilisez vos propres photos
- Ou des photos libres de droits (Unsplash, Pexels, Pixabay)
- Évitez les images protégées par copyright

---

Pour toute question sur l'ajout d'images, contactez votre développeur web.
