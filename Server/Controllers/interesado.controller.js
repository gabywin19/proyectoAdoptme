const { Interesado } = require("../Models/interesado.model");

module.exports.createInteresado = (request, response) => {
  const {
    adoptame_id, 
    nombre,
    comuna,
    telefono,
    email,
    edad,
    ocupacion,
    dondeVive,
    tipoAnimal,
    edadPreferencia,
    esterilizar,
    gastosVeterinario,
    visitasSeguimiento,
    pasearAdoptado,
    userCreate,
  } = request.body;

  console.log(request.body);

  Interesado.create({
    adoptame_id,
    nombre,
    comuna,
    telefono,
    email,
    edad,
    ocupacion,
    dondeVive,
    tipoAnimal,
    edadPreferencia,
    esterilizar,
    gastosVeterinario,
    visitasSeguimiento,
    pasearAdoptado,
    userCreate,
  })
    .then((interesado) => response.json(interesado))
    .catch((err) => {
      console.log(err);
      response.status(400).json(err);
    });
};

module.exports.getAllInteresado = (request, response) => {
  Interesado.find({})
    .then((interesado) => response.json(interesado))
    .catch((err) => response.json(err));
};
module.exports.getInteresado = (request, response) => {
  Interesado.findOne({ _id: request.params.id })
    .then((interesado) => response.json(interesado))
    .catch((err) => response.json(err));
};

module.exports.updateInteresado = (request, response) => {
  console.log(request.body);
  Interesado.finOneAndUpdate({ _id: request.params.id }, request.body, {})
    .then((updatedInteresado) => response.json(updatedInteresado))
    .catch((err) => response.json(err));
};

module.exports.deleteInteresado = (request, response) => {
  Interesado.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};
