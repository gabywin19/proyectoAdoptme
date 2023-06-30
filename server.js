const express = require("express");
const app = express();
const bodyParser = require("body-parser");

require("./Server/Config/mongoose.config");

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

// body parser configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./Server/Routes/all.routes")(app);

app.listen(8080, () => {
  console.log("Listening at Port 8080");
});
