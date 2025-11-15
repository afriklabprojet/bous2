# 🚀 INSTRUCTIONS DE DÉPLOIEMENT AVEC RESEND

## ⚠️ AVANT DE DÉPLOYER - CONFIGURATION RESEND OBLIGATOIRE

Le site utilise maintenant Resend pour envoyer les emails de commande. Vous DEVEZ configurer Resend avant que le formulaire fonctionne.

## 📋 Étapes Rapides

### 1. Créer un compte Resend (2 minutes)

1. Allez sur **https://resend.com**
2. Cliquez sur "Sign Up"
3. Créez un compte (gratuit - 100 emails/jour)
4. Vérifiez votre email

### 2. Obtenir votre clé API (1 minute)

1. Connectez-vous à **https://resend.com/api-keys**
2. Cliquez sur "**Create API Key**"
3. Nom : `JSGC Production`
4. Permission : **Sending access**
5. **COPIEZ LA CLÉ** (format: `re_123abc...`) - elle ne sera plus affichée!

### 3. Configurer Netlify (2 minutes)

1. Allez sur votre **Dashboard Netlify**
2. Sélectionnez le site **jsgc.netlify.app**
3. Cliquez sur **Site configuration** (dans le menu gauche)
4. Cliquez sur **Environment variables**
5. Cliquez sur **Add a variable** et ajoutez :

```
Variable: RESEND_API_KEY
Value: [Collez votre clé API Resend ici]
```

6. Cliquez sur **Add a variable** et ajoutez :

```
Variable: EMAIL_FROM
Value: contact@jsgc.store
```

7. Cliquez sur **Add a variable** et ajoutez :

```
Variable: EMAIL_TO  
Value: contact@jsgc.store
```

8. Cliquez sur **Save**

### 4. Redéployer le site (1 minute)

1. Dans Netlify, allez sur **Deploys**
2. Cliquez sur **Trigger deploy** → **Deploy site**
3. Attendez que le déploiement se termine (🟢 vert)

### 5. Tester le formulaire (2 minutes)

1. Allez sur **https://jsgc.netlify.app/commande**
2. Remplissez le formulaire de commande
3. Cliquez sur **Envoyer la commande**
4. ✅ Vous devriez voir : "Commande envoyée avec succès!"
5. 📧 Vérifiez vos emails (vous + client recevront un email)

## 🎉 C'EST FAIT!

Votre site envoie maintenant des emails professionnels automatiquement!

---

## 📧 Emails Envoyés

### Pour l'entreprise (contact@jsgc.store):
- ✅ Notification de nouvelle commande
- ✅ Toutes les infos client
- ✅ Adresse de livraison complète
- ✅ Boutons d'action (Appeler / Email)
- ✅ Design professionnel avec logo

### Pour le client:
- ✅ Confirmation de commande
- ✅ Résumé de leur commande
- ✅ Vos coordonnées de contact
- ✅ Design professionnel

---

## 🔧 Configuration Optionnelle - Domaine Personnalisé

Pour envoyer depuis `contact@jsgc.store` au lieu de `onboarding@resend.dev`:

### 1. Ajouter le domaine dans Resend

1. Allez sur **https://resend.com/domains**
2. Cliquez sur **Add Domain**
3. Entrez : `jsgc.store`
4. Resend vous donnera des enregistrements DNS

### 2. Configurer les DNS

Allez chez votre hébergeur de domaine et ajoutez:

**Enregistrement SPF (TXT):**
```
Type: TXT
Nom: @
Valeur: v=spf1 include:amazonses.com ~all
```

**Enregistrement DKIM (TXT):**
```
Type: TXT  
Nom: [fourni par Resend]
Valeur: [fourni par Resend]
```

**Enregistrement MX:**
```
Type: MX
Priorité: 10
Valeur: feedback-smtp.us-east-1.amazonses.com
```

### 3. Vérifier

- Attendez 10-30 minutes pour la propagation DNS
- Resend vérifiera automatiquement
- ✅ Status passera à "Verified"

---

## 📊 Statistiques

Consultez vos envois sur: **https://resend.com/logs**

- Emails envoyés
- Emails ouverts  
- Erreurs éventuelles

---

## 🆘 Problèmes?

### ❌ "API key not found"
- Vérifiez que `RESEND_API_KEY` est bien dans les variables Netlify
- Redéployez le site

### ❌ Emails non reçus
- Vérifiez les **spams**
- Vérifiez les logs Resend: https://resend.com/logs
- Assurez-vous que votre email est vérifié

### ❌ Erreur 429
- Limite de 100 emails/jour atteinte
- Attendez 24h ou passez au plan Pro ($20/mois)

---

## 💰 Prix Resend

**Plan Gratuit (actuel):**
- ✅ 100 emails/jour
- ✅ 1 domaine
- ✅ Support de base
- **GRATUIT**

**Plan Pro (si besoin):**
- ✅ 50,000 emails/mois
- ✅ Domaines illimités
- ✅ Support prioritaire
- **$20/mois**

---

## 📚 Documentation Complète

Voir **RESEND_SETUP.md** pour tous les détails.

---

**✨ Votre site est maintenant professionnel avec envoi d'emails automatique!**
