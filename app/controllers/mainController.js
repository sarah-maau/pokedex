// import du dataMapper
const dataMapper = require('../dataMapper')

const mainConroller = {
    // méthode pour la page d'accueil
    homePage: (req, res) => {
        dataMapper.getAllPoke((err, data) => {
            if(err) {
                console.trace(err); 
                res.render('error', { 
                    message: 'Une erreur est survenue merci de réessayer ultérieurement',
                    error: 'Erreur 500'
                });
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
                console.trace(err);
                res.render('error', { 
                    message: 'Une erreur est survenue merci de réessayer ultérieurement',
                    error: 'Erreur 500'
                });
                return;
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
                res.render('error', { 
                    message: 'Une erreur est survenue merci de réessayer ultérieurement',
                    error: 'Erreur 500'
                });
                return;
            }
            else res.render('types', {types: data.rows});
        })
    }, 

    // méthode pour afficher les pokémons par catégories
    typePage: (req, res) => {
        dataMapper.getPokeByTypes(req.params.typeId, (err, data) => {
            if (err) {
                console.trace(err);
                res.render('error', { 
                    message: 'Une erreur est survenue merci de réessayer ultérieurement',
                    error: 'Erreur 500'
                });
            }
            else res.render('home', {pokemons: data.rows});
        }) 
    },

    notFound: (req, res) => {
        res.status(404).render('error', { 
            message: 'Une erreur est survenue merci de réessayer ultérieurement',
            error: 'Erreur 404'
        });
    }
}

module.exports=mainConroller;