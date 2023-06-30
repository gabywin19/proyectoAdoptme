const mongoose = require("mongoose");
const InteresadoSchema = new mongoose.Schema(
    {
        adoptame_id: { type: String, requerid: true},
        nombre: { type: String, requerid: true},
        telefono: { type: String, requerid: true},
        comuna: { type: String, requerid: true},
        email: { type: String, requerid: true},
        edad: { type: String, requerid: true},
        ocupacion: { type: String, requerid: true},
        dondeVive: { type: String, requerid: true},
        tipoAnimal: { type: String, requerid: true},
        edadPreferencia: { type: String, requerid: true},
        esterilizar: { type: String, requerid: true},
        gastosVeterinario: { type: String, requerid: true},
        visitasSeguimiento: { type: String, requerid: true},
        pasearAdoptado: { type: String, requerid: true},
        user_id : { type: String, requerid: true},

    },

    { timestamps: true}

);
module.exports.Interesado= mongoose.model ("Interesado", InteresadoSchema);

