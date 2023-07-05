const { Adoptame} = require("../Models/adoptame.model");

module.exports.createAdoptame = (request, response) => {
    const { apodo, caracteristicas, edad, descripcionMascota, tipoAnimal, datosMedicos, raza, imagen1, imagen2, imagen3, imagen4, imagen5, telefonoContacto, emailContacto, nombreContacto, userCreate} =
        request.body;

    console.log(request.body);
    const estado = 'INPROCESS'
    Adoptame.create ({
        apodo,
        caracteristicas,
        edad,
        descripcionMascota,
        tipoAnimal,
        datosMedicos,
        raza,
        imagen1,
        imagen2,
        imagen3,
        imagen4,
        imagen5,
        telefonoContacto,
        emailContacto,
        nombreContacto,
        userCreate,
        estado,

    })
        .then((adoptame) => response.json(adoptame))
        .catch((err) => {
            console.log(err);
            response.status(400).json(err);

        });
     
    };
    
    module.exports.getAllAdoptame = (request, response) => {
        Adoptame.find({})
            .then((adoptame) => response.json(adoptame))
            .catch((err) => response.json(err));
    };
    module.exports.getAdoptame= (request, response) => {
        Adoptame.findOne({ _id: request.params.id })
          .then((adoptame) => response.json(adoptame))
          .catch((err) => response.json(err));
      };
      module.exports.getInProcess= (request, response) => {
        Adoptame.find({ estado: 'INPROCESS' })
          .then((adoptame) => response.json(adoptame))
          .catch((err) => response.json(err));
      };


    module.exports.updateAdoptame = ( request, response) => {
        console.log(request.body);
        Adoptame.finOneAndUpdate ({ _id: request.params.id}, request.body, {
    })
        .then((updatedAdoptame) => response.json(updatedAdoptame))
        .catch((err) => response.json(err));
    };

    module.exports.deleteAdoptame = (request, response) => {
        Adoptame.deleteOne ({ _id: request.params.id })
            .then((deleteConfirmation) => response.json(deleteConfirmation))
            .catch((err) => response.json (err));
    };
    