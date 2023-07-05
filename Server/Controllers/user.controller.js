const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const auth = require("../Config/auth");
const { User } = require("../Models/user.model");

module.exports.register = (request, response) => {
  // hash the password
  console.log(request.body);
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      //  crea una nueva instancia de usuario  y recoge los datos
      const user = new User({
        userName: request.body.userName,
        email: request.body.email,
        password: hashedPassword,
      });
      // grabar un nuevo usuario
      user
        .save()
        //devuelve el success si el nuevo usuario se agrega a la base de datos con éxito
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
};

module.exports.login = (req, res) => {
  User.findOne({ email: req.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(req.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {
          // check if password matches
          if (!passwordCheck) {
            return res.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          res.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password do not match
        .catch((error) => {
          res.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      res.status(404).send({
        message: "Email not found",
        e,
      });
    });
};

module.exports.update = async (req, res) => {
  try {
    const { userId } = await jwt.verify(req.cookies.token, process.env.SECRET_KEY);
    const updateUsuario = await User.findOne({ _id: userId });
    if (req.body.password && req.body.confirmPassword) {
      updateUsuario.password = req.body.password;
      updateUsuario.confirmPassword = req.body.confirmPassword;
    } else {
      updateUsuario.confirmPassword = updateUsuario.password;
    }
  
    updateUsuario.email = req.body.email;
    updateUsuario.userName = req.body.userName;
  

    await updateUsuario.save();
    res.json({
      message: "Se Actualizo El Perfil del Usuario",
    });
  } catch (error) {
    res.status(500).json({
      id: req.params.id,
      message: "No Hemos Podido Actualizar el Perfil del Usuario",
      error,
    });
  }
};

module.exports.get = async (req, res) => {
  try {
    const { userId } = jwt.verify(req.cookies.token, "RANDOM-TOKEN");
    const oneUsuario = await User.findOne({ _id: userId });
   
    res.json(oneUsuario);
  } catch (error) {
    res.status(500).json({
      id: req.params.id,
      message: "No Hemos Podido Encontrar el Usuario",
      error,
    });
  }
};