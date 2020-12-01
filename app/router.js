// import du module express
const express = require('express');
const router = express.Router();

// import du controller
const mainController = require('./controllers/mainController');

// routes
router.get('/', mainController.homePage);

router.get('/pokemon/:numero', mainController.detailPage);

router.get('/types', mainController.typesPage);

router.get('/type/:typeId', mainController.typePage);

router.use(mainController.notFound);


// route d'erreurs
router.use(mainController.notFound);

module.exports = router;
