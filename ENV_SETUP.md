# Configuration des variables d'environnement

## Backend (server/.env)

Créez un fichier `.env` dans le dossier `server/` avec le contenu suivant :

```env
STRIPE_SECRET_KEY=sk_test_xxx
PRICE_REZO=price_xxx
PRICE_REZO_CHARLY=price_xxx
PRICE_PERSONNALISATION=price_xxx
PORT=3001
```

**Où trouver les Price IDs :**
1. Connectez-vous à votre [dashboard Stripe](https://dashboard.stripe.com)
2. Allez dans **Produits** > **Prix**
3. Créez ou sélectionnez vos prix pour chaque offre
4. Copiez les Price IDs (commencent par `price_`)

## Frontend (.env.local)

Créez un fichier `.env.local` à la racine du projet (même niveau que `package.json`) :

```env
NEXT_PUBLIC_PRICE_REZO=price_xxx
NEXT_PUBLIC_PRICE_REZO_CHARLY=price_xxx
NEXT_PUBLIC_PRICE_PERSONNALISATION=price_xxx
```

**Note :** Dans Next.js, les variables d'environnement accessibles côté client doivent commencer par `NEXT_PUBLIC_`.

**Alternative :** Si vous préférez utiliser le préfixe `REACT_APP_` (compatible avec React classique), vous pouvez aussi ajouter :

```env
REACT_APP_PRICE_REZO=price_xxx
REACT_APP_PRICE_REZO_CHARLY=price_xxx
REACT_APP_PRICE_PERSONNALISATION=price_xxx
```

Le code du frontend supporte les deux formats.

## Mode test vs production

- **Mode test** : Utilisez `sk_test_...` pour la clé Stripe
- **Mode production** : Utilisez `sk_live_...` pour la clé Stripe

Le backend détecte automatiquement le mode et affiche un message dans les logs.

