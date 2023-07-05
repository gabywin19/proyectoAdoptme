const mongoose = require("mongoose");
const AdoptameSchema = new mongoose.Schema(
    {
        apodo: { type: String, requerid: true},
        caracteristicas: { type: String, requerid: true},
        edad: { type: String,enum: ['CACHORRO', 'ADOLESCENTE','ADULTO'] ,requerid: true},
        descripcionMascota: { type: String, requerid: true},
        tipoAnimal: { type: String, enum: ['PERRO', 'GATO'], requerid: true},
        datosMedicos: { type: String, requerid: true},
        raza: { type: String, requerid: true},
        imagen1: { type: String, requerid: true},
        imagen2: { type: String},
        imagen3: { type: String},
        imagen4: { type: String},
        imagen5: { type: String},
        telefonoContacto: { type: String, requerid: true},
        emailContacto: { type: String, requerid: true},
        nombreContacto: { type: String, requerid: true},
        userCreate: { type: String, requerid: true},
        estado: { type: String, enum: ['INPROCESS', 'FINISH', 'CANCELED'], requerid: true},
        interesados: [{ type: mongoose.Schema.Types.ObjectId, ref: "interesados" }]        


    },
    
    {timestamps: true}
);
 module.exports.Adoptame= mongoose.model ("Adoptame", AdoptameSchema);