# Configuration Vercel pour CallToChef

## Variables d'environnement requises

Pour que le formulaire fonctionne correctement, vous devez configurer les variables d'environnement suivantes dans votre dashboard Vercel :

### Variables Stripe (obligatoires)

1. **STRIPE_SECRET_KEY**
   - Votre clé secrète Stripe (commence par `sk_`)
   - Mode test : `sk_test_...`
   - Mode production : `sk_live_...`

2. **STRIPE_WEBHOOK_SECRET**
   - Secret du webhook Stripe (commence par `whsec_`)
   - Récupérable dans le dashboard Stripe > Webhooks

### Variables Price ID (obligatoires)

3. **NEXT_PUBLIC_PRICE_REZO**
   - Price ID Stripe pour l'offre "Agent Rézo" (Essentielle)
   - Format : `price_xxxxx`
   - Récupérable dans Stripe > Products > Pricing

4. **NEXT_PUBLIC_PRICE_REZO_CHARLY**
   - Price ID Stripe pour l'offre "Rézo + Charly" (Confort)
   - Format : `price_xxxxx`
   - Récupérable dans Stripe > Products > Pricing

### Variables Frontend (optionnelles mais recommandées)

5. **NEXT_PUBLIC_FRONTEND_URL**
   - URL de votre site en production
   - Exemple : `https://www.calltochef.fr`
   - Utilisé pour les redirections Stripe

## Comment configurer sur Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous
2. Sélectionnez votre projet `Calltochef-ui`
3. Allez dans **Settings** > **Environment Variables**
4. Ajoutez chaque variable :
   - **Key** : Le nom de la variable (ex: `STRIPE_SECRET_KEY`)
   - **Value** : La valeur de la variable
   - **Environment** : Sélectionnez `Production`, `Preview`, et `Development` selon vos besoins
5. Cliquez sur **Save**
6. **Important** : Redéployez votre application pour que les variables prennent effet

## Vérification

Après avoir configuré les variables et redéployé :

1. Allez sur votre site : `https://www.calltochef.fr/formulaire?pack=Confort`
2. Remplissez le formulaire jusqu'à l'étape 3
3. Cliquez sur "Activer mon essai gratuit"
4. Vous devriez être redirigé vers Stripe Checkout (pas d'erreur de configuration)

## Dépannage

### Erreur "PriceId non défini"
- Vérifiez que `NEXT_PUBLIC_PRICE_REZO` et `NEXT_PUBLIC_PRICE_REZO_CHARLY` sont bien définis
- Vérifiez que les valeurs commencent par `price_`
- Redéployez après avoir ajouté/modifié les variables

### Erreur 500 sur `/api/checkout/setup`
- Vérifiez que `STRIPE_SECRET_KEY` est correct
- Vérifiez que la clé correspond au bon environnement (test/production)
- Consultez les logs Vercel pour plus de détails

### Les variables ne sont pas prises en compte
- Les variables `NEXT_PUBLIC_*` sont injectées au moment du build
- Vous devez **redéployer** après avoir ajouté/modifié ces variables
- Les variables non-`NEXT_PUBLIC_*` sont disponibles côté serveur uniquement

