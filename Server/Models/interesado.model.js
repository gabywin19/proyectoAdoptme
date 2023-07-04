const mongoose = require("mongoose");
const InteresadoSchema = new mongoose.Schema(
    {
        adoptame_id: { type: String, requerid: true},
        nombre: { type: String, requerid: true},
        telefono: { type: String, requerid: true},
        comuna: { type: String, requerid: true},
        email: { type: String, requerid: true},
        edad: { type: String,enum: ['CACHORRO', 'ADOLESCENTE','ADULTO'], requerid: true},
        ocupacion: { type: String, requerid: true},
        dondeVive: { type: String, requerid: true},
        tipoAnimal: { type: String, enum: ['PERRO', 'GATO'],requerid: true},
        edadPreferencia: { type: String, requerid: true},
        esterilizar: { type: String, enum: ['SI', 'NO'], requerid: true},
        gastosVeterinario: { type: String, enum: ['SI', 'NO'],requerid: true},
        visitasSeguimiento: { type: String,enum: ['SI', 'NO'], requerid: true},
        pasearAdoptado: { type: String, enum: ['SI', 'NO'],requerid: true},
        user_id : { type: String, requerid: true},

    },

    { timestamps: true}

);
module.exports.Interesado= mongoose.model ("Interesado", InteresadoSchema);

