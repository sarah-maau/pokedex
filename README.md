# Pokédex

Ce pokédex recense les 151 pokemon de la région de Kanto.  

J'ai entièrement réalisé ce projet Node.js lors de mon deuxième mois de formation en développement web FS JavaScript.

Ce site est responsive.

## Réalisation

J'ai utilisé express et pour organiser mon code, je me suis basée sur l'architecture MVC.  
J'ai codé ce projet en 1 jour.

## Languages utilisés 

- HTML5, CSS3
- JavaScript 
- SQL 
  
 ![pokemon_db](database_design.png)

 ## Stacks
 - Node.js
 - Express
 - ejs
 - Bootstrap
 - PostgreSQL (avec tables relationnelles)


## Screenshots

### Home page
![pokemon_homepage](result/home.png)

### Pokemon page
![pokemon_page](result/detail.png)

### Types page
![pokemon_types](result/types.png)

### Types of pokemon page
![pokemon_type](result/electrik.png)

## Installation 

1. Cloner le repo 
- en utilisant la clé SSH
```
git clone git@github.com:sarah-maau/pokedex.git
```
- en utilisant HTTPS
```
git clone https://github.com/sarah-maau/pokedex.git
```

2. Installer les dépendances 

```
npm i
```
 
3. Créer une base de données, puis chargez les tables et les données 
   
```
psql -d <nom de la base de données> -f ./data/pokedex.sql
```

4. Créer un fichier .env reprenant les informations fournies dans le document `.env.example`

5. Lancer le script

```
npm start
```

## License
Ce projet est sous licence MIT - voir le fichier `LICENSE.md` pour plus de détails
