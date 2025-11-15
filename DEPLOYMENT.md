# Instructions de Déploiement - JSGC Site

## 🚀 Déploiement sur Netlify

### Prérequis

- Compte Netlify (gratuit sur https://netlify.com)
- Code source sur GitHub, GitLab ou Bitbucket

### Méthode 1: Déploiement via l'interface web Netlify

1. **Connectez votre dépôt Git**

   - Allez sur https://app.netlify.com
   - Cliquez sur "Add new site" → "Import an existing project"
   - Choisissez votre fournisseur Git (GitHub/GitLab/Bitbucket)
   - Autorisez Netlify à accéder à vos dépôts
   - Sélectionnez le dépôt `bois`

2. **Configuration du build**

   - **Branch to deploy**: `main` (ou votre branche principale)
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Framework preset**: Next.js

3. **Variables d'environnement** (optionnel)

   - Aucune variable n'est requise pour l'instant
   - Si vous ajoutez des services externes plus tard, configurez-les ici

4. **Déployer**

   - Cliquez sur "Deploy site"
   - Attendez que le build se termine (environ 2-3 minutes)
   - Votre site sera disponible sur une URL type: `random-name-123456.netlify.app`

5. **Personnaliser le domaine** (optionnel)
   - Allez dans "Domain settings"
   - Changez le nom du site pour quelque chose comme `jsgc-bois.netlify.app`
   - Ou ajoutez votre propre domaine personnalisé (ex: www.jsgc.ca)

### Méthode 2: Déploiement via CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Déployer le site
netlify deploy --prod

# Suivre les instructions à l'écran
```

## 📝 Configuration DNS pour domaine personnalisé

Si vous possédez un domaine (ex: jsgc.ca):

1. Dans Netlify, allez dans "Domain management" → "Add custom domain"
2. Entrez votre domaine: `www.jsgc.ca`
3. Netlify vous donnera les enregistrements DNS à configurer
4. Chez votre registraire de domaine, ajoutez:
   - Type A: `75.2.60.5` (Netlify)
   - ou CNAME: `your-site.netlify.app`

## 🔄 Déploiement automatique

Une fois configuré, chaque fois que vous poussez du code sur votre branche principale:

1. Netlify détecte automatiquement le changement
2. Lance un nouveau build
3. Déploie la nouvelle version
4. Votre site est mis à jour en quelques minutes

## 🎨 Personnalisation avant déploiement

### Ajout d'images

Placez vos images dans `public/images/`:

- `hero-bg.jpg` - Image de fond pour la page d'accueil
- `wood-stack-1.jpg`, `wood-stack-2.jpg` - Photos de bois
- `truck-1.jpg` - Photo du camion
- `wood-cutting.jpg` - Photo de coupe
- `delivery.jpg` - Photo de livraison

### Modification du numéro de téléphone

Si vous souhaitez ajouter un numéro de téléphone, modifiez:

- `app/contact/page.tsx` - Remplacez le texte par votre numéro
- `components/Footer.tsx` - Ajoutez le numéro si nécessaire

### Modification de l'email

L'email par défaut est `contact@jsgc.store`. Pour le changer:

- `components/ContactForm.tsx` ligne 16: changez `mailto:contact@jsgc.store`
- Mettez à jour toutes les occurrences dans les pages

## 🧪 Test avant déploiement

Testez toujours localement avant de déployer:

```bash
# Build de production
npm run build

# Tester le build
npm run start
```

Vérifiez:

- ✅ Toutes les pages se chargent
- ✅ La navigation fonctionne
- ✅ Le changement de langue fonctionne
- ✅ Le formulaire de commande ouvre l'email
- ✅ Responsive sur mobile/tablette/desktop

## 📊 Surveillance après déploiement

Netlify fournit:

- **Analytics**: Nombre de visiteurs, pages vues
- **Forms**: Si vous configurez un backend de formulaire
- **Logs**: Logs de build et d'erreurs

## 🔒 HTTPS

HTTPS est automatiquement activé par Netlify avec Let's Encrypt (gratuit).

## 💰 Coûts

- **Gratuit** pour:

  - 100 GB de bande passante/mois
  - 300 minutes de build/mois
  - Sites illimités

- **Payant** seulement si vous dépassez ces limites (très rare pour un site vitrine)

## 🆘 Résolution de problèmes

### Build échoue

- Vérifiez les logs dans Netlify
- Assurez-vous que `npm run build` fonctionne localement
- Vérifiez que toutes les dépendances sont dans `package.json`

### Site ne s'affiche pas

- Vérifiez que "Publish directory" est bien `.next`
- Vérifiez dans les logs de déploiement

### Images ne chargent pas

- Assurez-vous que les images sont dans `public/images/`
- Chemins doivent commencer par `/images/` (pas `public/images/`)

## 📞 Support

Pour toute question:

- Documentation Netlify: https://docs.netlify.com
- Support Netlify: https://answers.netlify.com
- Documentation Next.js: https://nextjs.org/docs

---

Bon déploiement! 🚀
