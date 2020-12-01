// import du dataMapper
const dataMapper = require('../dataMapper')

const mainConroller = {
    // méthode pour la page d'accueil
    homePage: (req, res, next) => {
        dataMapper.getAllPoke((err, data) => {
            if(err) {
                console.error(err); 
                next(); 
            } 
            else res.render('home', {pokemons: data.rows});
        });
    },

    //méthode pour afficher un pokémon

    detailPage: (req, res, next) => {
        const numero = Number(req.params.numero)
        dataMapper.getOnePoke(numero, (err, data) => {
            if (err) {
                console.trace(err);
                next();
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

    typesPage: (req, res, next) => {
        dataMapper.getAllTypes((err, data) => {
            if (err) {
                console.trace(err);
                next();
            }
            else res.render('types', {types: data.rows});
        })
    }, 

    // méthode pour afficher les pokémons par catégories
    typePage: (req, res, next) => {
        dataMapper.getPokeByTypes(req.params.typeId, (err, data) => {
            if (err) {
                console.trace(err);
                next();
            }
            else res.render('home', {pokemons: data.rows});
        }) 
    },

    notFound: (req, res) => {
        res.render('404');
    }
}

module.exports=mainConroller;