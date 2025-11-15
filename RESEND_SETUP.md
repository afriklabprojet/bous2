# 📧 Configuration de Resend pour les Emails

Ce projet utilise [Resend](https://resend.com) pour envoyer des emails professionnels de commande.

## 🚀 Configuration Rapide

### 1. Créer un compte Resend

1. Allez sur [resend.com](https://resend.com)
2. Créez un compte gratuit (100 emails/jour gratuits)
3. Vérifiez votre email

### 2. Obtenir votre clé API

1. Connectez-vous à [resend.com/api-keys](https://resend.com/api-keys)
2. Cliquez sur "Create API Key"
3. Donnez-lui un nom (ex: "JSGC Production")
4. Sélectionnez les permissions : **Send emails**
5. Copiez la clé API (elle ne sera affichée qu'une fois!)

### 3. Configurer le domaine (Optionnel mais recommandé)

#### Option A: Utiliser le domaine de test (pour développement)
- Resend fournit un domaine de test par défaut
- Les emails seront envoyés depuis `onboarding@resend.dev`
- Limité à votre email vérifié

#### Option B: Utiliser votre propre domaine (production)
1. Allez sur [resend.com/domains](https://resend.com/domains)
2. Cliquez sur "Add Domain"
3. Entrez votre domaine : `jsgc.store`
4. Ajoutez les enregistrements DNS suivants chez votre hébergeur :

```
Type: TXT
Name: _resend
Value: [fourni par Resend]

Type: MX
Priority: 10
Value: feedback-smtp.us-east-1.amazonses.com

Type: TXT
Name: [fourni par Resend]
Value: [DKIM key fourni par Resend]
```

5. Attendez la vérification (peut prendre jusqu'à 24h)

### 4. Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Resend API Key (OBLIGATOIRE)
RESEND_API_KEY=re_123456789...

# Configuration Email
EMAIL_FROM=contact@jsgc.store
EMAIL_TO=contact@jsgc.store
```

⚠️ **Important** : Ne commitez JAMAIS le fichier `.env.local` sur Git !

### 5. Configuration Netlify (Déploiement)

1. Allez sur votre dashboard Netlify
2. Sélectionnez votre site
3. Allez dans **Site configuration** → **Environment variables**
4. Ajoutez les variables :

```
RESEND_API_KEY = votre_clé_api_resend
EMAIL_FROM = contact@jsgc.store
EMAIL_TO = contact@jsgc.store
```

5. Redéployez le site

## 📨 Fonctionnalités

### Emails envoyés automatiquement :

1. **Email à l'entreprise (JSGC)** :
   - Notification de nouvelle commande
   - Toutes les informations du client
   - Adresse de livraison complète
   - Détails de la commande
   - Boutons d'action rapide (appel/email)

2. **Email de confirmation au client** :
   - Confirmation de réception
   - Résumé de la commande
   - Coordonnées de contact

### Design professionnel :
- ✅ Templates HTML responsive
- ✅ Branding JSGC (couleurs vertes)
- ✅ Compatible tous clients email
- ✅ Liens cliquables (téléphone, email)
- ✅ Multilingue (FR/EN)

## 🧪 Test Local

1. Assurez-vous que `.env.local` est configuré
2. Démarrez le serveur de développement :

```bash
npm run dev
```

3. Allez sur http://localhost:3000/commande
4. Remplissez et soumettez le formulaire
5. Vérifiez votre boîte email !

## 📊 Limites du Plan Gratuit

- **100 emails par jour**
- **1 domaine personnalisé**
- **Support de base**

Si vous dépassez ces limites, considérez le plan Pro ($20/mois) :
- 50,000 emails/mois
- Domaines illimités
- Support prioritaire

## 🔧 Dépannage

### Erreur: "API key not found"
- Vérifiez que `RESEND_API_KEY` est bien défini dans `.env.local`
- Redémarrez le serveur de développement

### Emails non reçus
- Vérifiez les spams
- Vérifiez que le domaine est vérifié (si vous utilisez votre propre domaine)
- Consultez les logs Resend : [resend.com/logs](https://resend.com/logs)

### Erreur 429 (Too Many Requests)
- Vous avez atteint la limite de 100 emails/jour
- Attendez 24h ou passez au plan Pro

## 📚 Documentation

- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference/introduction)
- [Resend Node.js SDK](https://github.com/resendlabs/resend-node)

## 🆘 Support

Pour toute question :
- Documentation Resend : [resend.com/docs](https://resend.com/docs)
- Support Resend : [resend.com/support](https://resend.com/support)
- Email : contact@jsgc.store
