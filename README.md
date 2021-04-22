# Crypto wallet app

Ce projet react est la partie front de Crypto wallet.

## Utiliser l'application

Pour pouvoir utiliser Crypto wallet app, il faut que  ['Crypto wallet api'](https://github.com/Jef-io/crypto-wallet-api) soit aussi lancé.

### `npm install`

Installe toutes les dépendances pour l'application

### `npm start`

Démarre l'application en mode développement.\
Ouvre  [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Fonctionnement

Crypto Wallet app permet de gérer vos crypto-monnaies.
Dans cette version il n'y a qu'un seul compte (admin) et aucune authentification.

Vous pouvez suivre les 100 cryptos les plus populaires et voir un graphe de leur évolution.
Il est également possible de déclarer posséder des cryptos, d'en acheter, vendre (si on en possède).

Vous pourrez donc consulter vos possessions, voir votre historique et suivre l'évolution de votre portefeuille.

## Bugs

Si les lignes du graphe d'évolution du portefeuille sont générées avec la réception des données, elles bouclent sur elles mêmes. Si ces lignes sont générées à partir d'un même tableau pré-existant, il n'y a aucun problème.
Dans cette version, l'évolution de votre portefeuille n'affiche que la valeur globale, la valeur en bitcoin, ethereum, dogecoin et sushi.