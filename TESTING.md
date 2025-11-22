# Guide de test - Intégration Stripe CallToChef

Ce guide explique comment tester l'intégration Stripe complète du projet CallToChef.

## Prérequis

1. **Variables d'environnement backend** : Assurez-vous que le fichier `server/.env` contient :
   ```
   STRIPE_SECRET_KEY=sk_test_xxx
   PRICE_REZO=price_xxx
   PRICE_REZO_CHARLY=price_xxx
   PRICE_PERSONNALISATION=price_xxx
   PORT=3001
   ```

2. **Variables d'environnement frontend** : Créez un fichier `.env.local` à la racine du projet avec :
   ```
   NEXT_PUBLIC_PRICE_REZO=price_xxx
   NEXT_PUBLIC_PRICE_REZO_CHARLY=price_xxx
   NEXT_PUBLIC_PRICE_PERSONNALISATION=price_xxx
   ```
   
   Ou utilisez les variables `REACT_APP_PRICE_*` si vous préférez.

## Étapes de test

### 1. Démarrer le backend

Ouvrez un terminal et naviguez vers le dossier `server/` :

```bash
cd server
npm install  # Si ce n'est pas déjà fait
npm run dev
```

Vous devriez voir :
```
✅ Stripe en mode TEST
✅ Variables d'environnement validées
Server running on 3001
```

### 2. Démarrer le frontend

Ouvrez un **nouveau terminal** et restez à la racine du projet :

```bash
npm install  # Si ce n'est pas déjà fait
npm run dev
```

Le frontend devrait démarrer sur `http://localhost:3000`.

### 3. Tester le checkout Stripe

1. **Ouvrez votre navigateur** et allez sur `http://localhost:3000/presentation`

2. **Trouvez la section "Tarifs & Offres"** avec les 3 cartes :
   - Agent Rézo (€29/mois)
   - Rézo + Charly (€69/mois) - Populaire
   - Équipe complète (€129/mois)

3. **Cliquez sur un bouton** (par exemple "🎯 Essayer Rézo gratuitement")

4. **Vérifiez que** :
   - Une requête est envoyée au backend (vérifiez les logs du serveur)
   - La page Stripe Checkout s'ouvre dans le navigateur
   - Vous pouvez voir les détails de l'offre dans Stripe

### 4. Tester le paiement (mode test)

Dans la page Stripe Checkout :

1. **Utilisez les cartes de test Stripe** :
   - Carte valide : `4242 4242 4242 4242`
   - Date d'expiration : n'importe quelle date future (ex: 12/34)
   - CVC : n'importe quel 3 chiffres (ex: 123)
   - Code postal : n'importe quel code postal (ex: 75001)

2. **Remplissez le formulaire** et cliquez sur "Payer"

3. **Vérifiez la redirection** :
   - Vous devriez être redirigé vers `http://localhost:3000/success`
   - La page devrait afficher "Paiement réussi"

### 5. Tester l'annulation

1. **Retournez sur la page de présentation** et cliquez à nouveau sur un bouton

2. **Dans Stripe Checkout**, cliquez sur "Retour" ou fermez la fenêtre

3. **Vérifiez la redirection** :
   - Vous devriez être redirigé vers `http://localhost:3000/cancel`
   - La page devrait afficher "Paiement annulé"

## Vérification des logs

### Backend

Dans le terminal du backend, vous devriez voir :

**Requête réussie :**
```
[/create-checkout-session] Incoming request { priceId: 'price_xxx', offer: 'Rézo' }
[/create-checkout-session] Session created successfully { sessionId: 'cs_test_xxx' }
```

**En cas d'erreur :**
```
[/create-checkout-session] Missing or invalid priceId
[/create-checkout-session] Stripe error: { type: '...', message: '...' }
```

### Frontend

Ouvrez la console du navigateur (F12) :

- **Succès** : Pas d'erreur, redirection vers Stripe
- **Erreur réseau** : Message d'erreur dans la console
- **Erreur API** : Alert avec message d'erreur

## Dépannage

### Le backend ne démarre pas

- Vérifiez que toutes les variables d'environnement sont définies dans `server/.env`
- Vérifiez que le port 3001 n'est pas déjà utilisé

### Le frontend ne peut pas se connecter au backend

- Vérifiez que le backend est bien démarré sur le port 3001
- Vérifiez la console du navigateur pour les erreurs CORS
- Vérifiez que `BACKEND_URL` dans `src/config.js` est bien `http://localhost:3001`

### Les boutons ne fonctionnent pas

- Vérifiez que les variables d'environnement `NEXT_PUBLIC_PRICE_*` sont bien définies
- Vérifiez la console du navigateur pour les erreurs
- Vérifiez que les `priceId` correspondent bien aux Price IDs de votre compte Stripe

### Stripe Checkout ne s'ouvre pas

- Vérifiez les logs du backend pour voir si la session est créée
- Vérifiez que `STRIPE_SECRET_KEY` est valide
- Vérifiez que les `priceId` sont corrects dans votre dashboard Stripe

## Métadonnées

Les métadonnées suivantes sont envoyées avec chaque session Stripe :

- `email` : Email du client (vide pour l'instant, à remplir plus tard)
- `offre` : Nom de l'offre choisie (Rézo, Rézo + Charly, ou Personnalisation)
- `date_naissance` : Date de naissance (vide pour l'instant, à remplir plus tard)

Ces métadonnées sont accessibles dans les webhooks Stripe et dans le dashboard Stripe.

