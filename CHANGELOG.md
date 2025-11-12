# Changelog - Site JSGC

Toutes les modifications importantes du projet sont documentées dans ce fichier.

## [1.0.0] - 2025-11-11

### ✨ Création initiale du projet

#### Ajouté

- ✅ Configuration Next.js 14 avec App Router
- ✅ TypeScript configuration complète
- ✅ TailwindCSS avec thème personnalisé (vert forêt #2E7D32, brun bois #8D6E63)
- ✅ Google Fonts: Montserrat (titres) et Open Sans (texte)
- ✅ Système de traduction FR/EN avec contexte React
- ✅ Configuration Netlify avec `netlify.toml`

#### Pages créées

- ✅ **Accueil** (`/`) - Hero, services, avantages, CTA
- ✅ **Services** (`/services`) - Détails des services (transport, bois, livraison)
- ✅ **Galerie** (`/galerie`) - Grille de photos avec placeholders
- ✅ **Commander** (`/commande`) - Formulaire de commande par email
- ✅ **Contact** (`/contact`) - Coordonnées et carte Google Maps

#### Composants créés

- ✅ `Header` - Navigation responsive avec menu mobile et switcher de langue
- ✅ `Footer` - Pied de page avec informations complètes
- ✅ `Hero` - Section hero avec gradient et SVG wave
- ✅ `ServiceCard` - Carte de service réutilisable
- ✅ `ContactForm` - Formulaire avec validation et mailto:

#### Fonctionnalités

- ✅ Navigation responsive (mobile/tablet/desktop)
- ✅ Changement de langue FR/EN dynamique
- ✅ Formulaire de commande fonctionnel (mailto:)
- ✅ Google Maps intégré
- ✅ Design mobile-first
- ✅ SEO optimisé (meta tags, Open Graph)
- ✅ Accessibilité (HTML sémantique, ARIA labels)

#### Documentation

- ✅ `README.md` - Documentation complète du projet
- ✅ `DEPLOYMENT.md` - Guide de déploiement Netlify
- ✅ `PROJECT_SUMMARY.md` - Récapitulatif du projet
- ✅ `public/images/README.md` - Instructions pour les images
- ✅ `.env.example` - Template variables d'environnement
- ✅ `.github/copilot-instructions.md` - Instructions Copilot

#### Configuration

- ✅ `tailwind.config.ts` - Thème personnalisé avec couleurs JSGC
- ✅ `next.config.ts` - Configuration Next.js optimisée
- ✅ `tsconfig.json` - Configuration TypeScript stricte
- ✅ `postcss.config.mjs` - Configuration PostCSS avec @tailwindcss/postcss
- ✅ `.gitignore` - Fichiers à ignorer
- ✅ `package.json` - Dépendances et scripts

#### Tests

- ✅ Build de production réussi
- ✅ Serveur de développement fonctionnel
- ✅ Toutes les pages accessibles
- ✅ Navigation entre pages OK
- ✅ Changement de langue OK
- ✅ Responsive vérifié

### 📝 Notes de version

Cette version 1.0.0 représente un site web complet et fonctionnel, prêt pour le déploiement sur Netlify.

**Points à améliorer dans les futures versions:**

- [ ] Ajouter de vraies images dans `public/images/`
- [ ] Ajouter Google Analytics
- [ ] Ajouter un backend pour les commandes (optionnel)
- [ ] Ajouter un blog/actualités (optionnel)
- [ ] Ajouter des témoignages clients
- [ ] Optimiser encore les performances (lazy loading, etc.)
- [ ] Ajouter une page FAQ détaillée
- [ ] Intégrer un système de paiement en ligne (optionnel)

---

## Format du Changelog

Ce fichier suit les conventions de [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Versionnage Sémantique](https://semver.org/lang/fr/).

### Types de changements

- **Ajouté** - Nouvelles fonctionnalités
- **Modifié** - Changements dans des fonctionnalités existantes
- **Déprécié** - Fonctionnalités qui seront retirées bientôt
- **Retiré** - Fonctionnalités retirées
- **Corrigé** - Corrections de bugs
- **Sécurité** - Corrections de vulnérabilités

---

_Pour contribuer ou suggérer des améliorations, contactez contact@jsgc.ca_
