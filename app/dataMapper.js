// importation de la database
const client = require ('./database');

const dataMapper = {
    // méthode pour récupérer toutes les données des pokémons
    getAllPoke: (callback) => {
        client.query(`SELECT * FROM "pokemon"`, callback)
    },

    // méthode pour récupérer le nom, l'attaque + attaque spé, la défense + défense spé, la vitesse, le numéro, la couleur du type, le nom du type et l'id du type 
    // nécessite de faire 2 JOIN : un pour joindre la table pokemon avec pokemon_type (numero=pokemon_numero) et un autre pour joindre pokemon_type avec type (type.id=type_id).

    getOnePoke: (numero, callback) => {
        client.query(`SELECT nom, pv, attaque, defense, attaque_spe, defense_spe, vitesse, numero, color, name, type.id FROM pokemon JOIN pokemon_type ON numero=pokemon_numero JOIN type ON type.id=type_id WHERE numero=$1`, [numero], callback);
    },

    getAllTypes: (callback) => {
        client.query(`SELECT * FROM type`, callback)
    },

    getPokeByTypes: (typeId, callback) => {
        client.query(`SELECT nom, pv, attaque, defense, attaque_spe, defense_spe, vitesse, numero, color, name, type.id FROM pokemon JOIN pokemon_type ON numero=pokemon_numero JOIN type ON type.id=type_id WHERE type_id=$1`, [typeId], callback);
    },

}

// export des méthodes
module.exports = dataMapper;