// import du dataMapper
const dataMapper = require('../dataMapper')

const mainConroller = {

    initVar: (_, response, next) => {
        response.locals.pageTitle = 'Pokedex, attrapez-les tous !'; 
        response.locals.pageDescription = `Un pokédex, est une sorte de dictionnaire de tous les pokémon (petites créatures fictives et adorables). Ces derniers peuvent se battre
        et disposent de caractéristiques de combat appelées statistiques. Chaque pokémon possède aussi un ou deux types (plante, roche, feu...).`;
        next();
    },

    // méthode pour la page d'accueil
    homePage: (req, res) => {
        dataMapper.getAllPoke((err, data) => {
            if(err) {
                console.trace(err); 
                response.status(500).render('error', {
                error: 500, 
                message: 'Une erreur est survenue, merci de réessayer ultérieurement' });
                return;
            } 
            else res.render('home', {pokemons: data.rows});
        });
    },

    //méthode pour afficher un pokémon

    detailPage: (req, res) => {
        const numero = Number(req.params.numero)
        dataMapper.getOnePoke(numero, (err, data) => {
            if (err) {
                if(err) {
                    console.trace(err); 
                    response.status(500).render('error', {
                    error: 500, 
                    message: 'Une erreur est survenue, merci de réessayer ultérieurement' });
                    return;
                } 
            }
            else {
                console.log(data.rows, data.rows[0])
                res.render('detail', {
                    pokemon: data.rows[0],
                    categories: data.rows})
            }
        })
    },

    // méthode pour afficher tous les types

    typesPage: (req, res) => {
        dataMapper.getAllTypes((err, data) => {
            if (err) {
                console.trace(err);
                if(err) {
                    console.trace(err); 
                    response.status(500).render('error', {
                    error: 500, 
                    message: 'Une erreur est survenue, merci de réessayer ultérieurement' });
                    return;
                } 
            }
            else res.render('types', {types: data.rows});
        })
    }, 

    // méthode pour afficher les pokémons par catégories
    typePage: (req, res) => {
        dataMapper.getPokeByTypes(req.params.typeId, (err, data) => {
            if(err) {
                console.trace(err); 
                response.status(500).render('error', {
                error: 500, 
                message: 'Une erreur est survenue, merci de réessayer ultérieurement' });
                return;
            } 
            else res.render('home', {pokemons: data.rows});
        }) 
    },

    notFound: (req, res) => {
        res.status(404).render('error', { 
            message: 'Une erreur est survenue merci de réessayer ultérieurement',
            error: 404
        });
    }
}

module.exports=mainConroller;