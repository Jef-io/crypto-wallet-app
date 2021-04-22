# Crypto wallet app

Ce répertoire GIT est la partie front de notre application REACT Crypto wallet.

## Installer l'application

Dans un premier temps, il vous faudra cloner ce répertoire en local. Pour cela vous pouvez utiliser une application comme GitDesktop ou un terminal de commande.
Il vous faudra également cloner le répertoire ['Crypto wallet api'](https://github.com/Jef-io/crypto-wallet-api)
A noter que la position des répertoires importe peu.

Une fois les répertoires clonés, lancer la ligne de commande suivante dans chacun des répertoires :

### `npm install`

Installe toutes les dépendances pour l'application.


## Lancer l'application

Pour pouvoir utiliser Crypto wallet app, il faut lancer les deux répertoires précédemment créés avec la ligne de commande suivante :

### `npm start`

Démarre l'application en mode développement.\
Ouvre [http://localhost:3000](http://localhost:3000) dans votre navigateur.


## Fonctionnement

- Crypto Wallet app permet de gérer votre portefeuille de cryptomonnaie, de garder un œil sur son évolution et d'avoir accès à votre historique de transactions. Vous pourrez aussi suivre les 100 cryptos les plus populaires, mais aussi d'acheter ou vendre des cryptomonnaies. Dans cette version, il n'y a pas d'authentification.

- Le portefeuille présente les cryptos possédées et la valeur des actifs en euros selon le cours actuel. À tout moment, vous pouvez déclarer posséder des cryptos, cette fonctionnalité vous sera particulièrement utile à la première utilisation. Un graphique montre l'évolution de votre portefeuille les 30 derniers jours ainsi que celle de quelques cryptos.

- L'achat est possible pour n'importe laquelle des 100 cryptos les plus populaires du moment. La vente n'est possible que pour les cryptos que vous possédez et ne peut pas excéder le montant des actifs que vous possédez pour la crypto choisie.

- L'historique présente l'ensemble de vos transactions avec des informations telles que le type ou la valeur en euros selon le cours au moment de la transaction.

- La page "mes cryptos suivies" vous permettra de suivre l'évolution de cryptos que vous choisissez que vous les possédiez ou non !

- Les informations sur les cryptos monnaies proviennent de l'api coingecko. Toutes les informations relatives au compte utilisateur sont stockées dans une base de données. Cette base est prévue pour accueillir plusieurs utilisateurs, de même que les requêtes back-end.

## Bugs

- Si les lignes du graphe d'évolution du portefeuille sont générées avec la réception des données, elles bouclent sur elles-mêmes. Si ces lignes sont générées à partir d'un même tableau pré-existant, il n'y a aucun problème.
Dans cette version, l'évolution de votre portefeuille n'affiche donc que la valeur globale, la valeur en bitcoin, ethereum, dogecoin et sushi.
- Parfois, les requêtes qui font appel à l'API CoinGecko échouent (les aléas des services gratuits), il faut donc recharger la page.
