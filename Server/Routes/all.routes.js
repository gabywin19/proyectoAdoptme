const AdoptameController = require("../Controllers/adoptame.controller");
const InteresadoController = require("../Controllers/interesado.controller");
const UserController = require("../Controllers/user.controller");
const GestionController = require("../Controllers/gestion.controller");

const auth = require("../Config/auth");

module.exports = function (app) {

  app.post("/api/adoptame",  AdoptameController.createAdoptame);
  app.get("/api/adoptame/inprocess/", AdoptameController.getInProcess);
  app.get("/api/adoptame/:id", AdoptameController.getAdoptame);

  app.put("/api/adoptame/:id", AdoptameController.updateAdoptame);
  app.delete("/api/adoptame/:id", AdoptameController.deleteAdoptame);
  app.get("/api/publicaciones", AdoptameController.getAllAdoptame);
  
  app.post("/api/interesado", InteresadoController.createInteresado);
  app.get("/api/interesado", InteresadoController.getAllInteresado);
  app.get("/api/interesado/:id", InteresadoController.getInteresado);
  app.put("/api/interesado/:id", InteresadoController.updateInteresado);
  app.delete("/api/interesado/:id", InteresadoController.deleteInteresado);


  

  // register endpoint
  app.post("/api/register", UserController.register);
  // login endpoint
  app.post("/api/login", UserController.login);

  // free endpoint
  //app.get("/free-endpoint", (request, response) => {
  //  response.json({ message: "You are free to access me anytime" });
  //});

  // authentication endpoint
  //app.get("/auth-endpoint", auth, (request, response) => {
  //  response.send({ message: "You are authorized to access me" });
  //});
};