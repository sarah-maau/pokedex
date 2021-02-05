//  import des varianles d'envrionnement
require('dotenv').config();

const express = require('express');

// import du router
const router = require('./app/router');

// config du PORT
const PORT = process.env.PORT || 3300;

const app = express();

// utilisation d'ejs comme moteur de rendu
app.set('view engine', 'ejs');

// indique où sont les vues
app.set('views', 'app/views');

// servir les fichiers statiques qui sont dans "public"
app.use(express.static('public'));

// routage !
app.use(router);

// on lance le serveur
app.listen(PORT, () => {
console.log(`Listening on http://localhost:${PORT}`);
});
