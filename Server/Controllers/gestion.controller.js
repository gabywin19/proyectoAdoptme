const { Adoptame} = require("../Models/adoptame.model");
const { Interesados, Interesado } = require("../Models/interesado.model");


module.exports.getAllAdoptame = (request, response) => {
        Adoptame.find({})
            .then((adoptame) => response.json(adoptame))
            .catch((err) => response.json(err));
    };

