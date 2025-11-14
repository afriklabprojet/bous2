# Transport et Bois de Chauffage JSGC - Site Vitrine

[![Netlify Status](https://api.netlify.com/api/v1/badges/44d86584-ffc7-4bc3-b27e-0ed3560f5bee/deploy-status)](https://app.netlify.com/projects/jsgc/deploys)

Site web professionnel pour l'entreprise **Transport et Bois de Chauffage JSGC**, située à Ferland-et-Boilleau, Québec.

🌐 **Site en ligne** : [https://jsgc.netlify.app](https://jsgc.netlify.app)

## 🌲 À propos

JSGC est une entreprise québécoise spécialisée dans :

- Le transport de marchandises
- La vente de bois de chauffage de qualité supérieure
- La livraison rapide dans tout le Saguenay-Lac-Saint-Jean

**Coordonnées :**

- Adresse : 1100 Route 381, Ferland-et-Boilleau (Québec) G0V 1H0, Canada
- NEQ : 1175166686
- Email : contact@jsgc.ca

## 🚀 Technologie

- **Framework** : Next.js 14 (App Router)
- **Langage** : TypeScript
- **Style** : TailwindCSS
- **Fonts** : Montserrat, Open Sans (Google Fonts)
- **Déploiement** : Netlify

## 📁 Structure du projet

```
bois/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── services/page.tsx     # Page des services
│   ├── galerie/page.tsx      # Galerie photo
│   ├── commande/page.tsx     # Formulaire de commande
│   ├── contact/page.tsx      # Page contact
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Styles globaux
├── components/
│   ├── Header.tsx            # En-tête avec navigation
│   ├── Footer.tsx            # Pied de page
│   ├── Hero.tsx              # Section hero
│   ├── ServiceCard.tsx       # Carte de service
│   └── ContactForm.tsx       # Formulaire de commande
├── lib/
│   ├── translations.ts       # Traductions FR/EN
│   └── language-context.tsx  # Contexte multilingue
├── public/
│   └── images/               # Images du site
└── package.json
```

## 🎨 Design

**Palette de couleurs :**

- Vert forêt : `#2E7D32` (principal)
- Brun bois : `#8D6E63` (accent)
- Blanc cassé : `#FAFAFA` (arrière-plan)

**Typographie :**

- Montserrat : Titres et en-têtes
- Open Sans : Texte corporel

## 🌐 Fonctionnalités

✅ Site multilingue (Français/Anglais)
✅ Design responsive (mobile-first)
✅ Formulaire de commande par email (mailto)
✅ Galerie de photos
✅ Carte Google Maps intégrée
✅ SEO optimisé
✅ Performance optimale

## 🛠️ Installation et développement

### Prérequis

- Node.js 18+
- npm ou yarn

### Installation

\`\`\`bash

# Installer les dépendances

npm install

# Lancer le serveur de développement

npm run dev
\`\`\`

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Commandes disponibles

\`\`\`bash
npm run dev # Démarrer le serveur de développement
npm run build # Compiler le projet pour la production
npm run start # Démarrer le serveur de production
npm run lint # Vérifier le code avec ESLint
\`\`\`

## 📦 Déploiement sur Netlify

### Option 1 : Déploiement via Git

1. Poussez votre code sur GitHub
2. Connectez-vous à [Netlify](https://www.netlify.com/)
3. Cliquez sur "Add new site" → "Import an existing project"
4. Sélectionnez votre dépôt GitHub
5. Configuration de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `.next`
   - **Framework preset** : Next.js

### Option 2 : Déploiement via CLI

\`\`\`bash

# Installer Netlify CLI

npm install -g netlify-cli

# Se connecter à Netlify

netlify login

# Déployer

netlify deploy --prod
\`\`\`

### Configuration Netlify

Créez un fichier `netlify.toml` à la racine :

\`\`\`toml
[build]
command = "npm run build"
publish = ".next"

[[plugins]]
package = "@netlify/plugin-nextjs"
\`\`\`

## 📸 Images

Les images doivent être placées dans le dossier `public/images/`. Formats recommandés :

- Photos : JPG/WebP
- Logos : SVG/PNG
- Optimisation recommandée avant upload

**Images nécessaires :**

- `hero-bg.jpg` : Image d'arrière-plan du hero
- Photos de bois de chauffage pour la galerie
- Photos du camion de livraison
- Photos des installations

## 🔧 Personnalisation

### Modifier les couleurs

Éditez `tailwind.config.ts` :

\`\`\`typescript
colors: {
forest: {
DEFAULT: '#2E7D32', // Modifier ici
light: '#4CAF50',
dark: '#1B5E20',
},
// ...
}
\`\`\`

### Ajouter du contenu

Les traductions se trouvent dans `lib/translations.ts`. Modifiez les textes FR/EN selon vos besoins.

## 📧 Formulaire de commande

Le formulaire utilise `mailto:` pour envoyer les commandes par email. Aucun backend n'est requis. Les données sont envoyées à `contact@jsgc.ca`.

Pour changer l'email de destination, modifiez `components/ContactForm.tsx` :

\`\`\`typescript
const mailtoLink = `mailto:VOTRE-EMAIL@exemple.com?subject=...`;
\`\`\`

## 🔍 SEO

Le site est optimisé pour les moteurs de recherche :

- Balises meta configurées dans `app/layout.tsx`
- Structure HTML sémantique
- Open Graph pour les réseaux sociaux
- Sitemap automatique (Next.js)

## 📱 Responsive

Le site est entièrement responsive :

- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## 🤝 Support

Pour toute question ou problème :

- Email : contact@jsgc.ca
- Créez une issue sur GitHub

## 📄 Licence

© 2025 Transport et Bois de Chauffage JSGC. Tous droits réservés.

---

**Développé avec ❤️ pour JSGC**
# bous2
