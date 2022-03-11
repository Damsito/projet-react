## Projet React
### Installation
Pour lancer le projet, il suffit de faire :

``
npm run start
``

### Sujet du projet
Concernant le sujet de mon projet, on va avoir la liste des match 
de premier league et de champions league dans la saison 2020/2021.

On va pouvoir filtrer par match et par championnat, donc soit premier league soit champions league.

Ensuite, pour la vue détaillé, j'affiche le match avec les deux équipes, leurs logos respectifs, 
le lieu de la rencontre, la date, le score, la formation et puis toutes les statistiques des deux équipes lors du match.

De plus, on peut aussi voir les équipes qu'il y a dans chaque pays dans la page Equipe.

On peut faire une recherche sur le nom de l'équipe, et sur le pays.
Tous les pays ne marchent pas à cause de l'API (il faut payer)

### Informations

Mettre en place un système de styles : 

J'ai mis en place un système de style pour le composant Card, je ne l'ai fait que 
pour celui-là pour te montrer que je sais le faire, car j'utilise tailwind partout ailleurs.

Charger dynamiquement les composants des routes secondaires :

Dans le composant Equipe, je charge dynamiquement le composant Input.
