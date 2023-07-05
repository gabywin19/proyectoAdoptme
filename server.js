const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require('path')
const cookieParser = require('cookie-parser')

require("./Server/Config/mongoose.config");

const cors = require('cors')

const corsOptions = {
    origin: ['http://localhost:3000', 'http://192.168.5.109:3000'],
    credentials: true
};

app.use(cors(corsOptions))
app.use(cookieParser())

/*
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
*/

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, 'server/uploads/imagen')))

require("./Server/Routes/all.routes")(app);

app.listen(8080, () => {
  console.log("Listening at Port 8080");
});