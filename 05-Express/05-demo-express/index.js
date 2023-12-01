const express = require("express");
const server = express();
const morgan = require('morgan');
const apiRouter = require("./src/routes/api");
const characterRouter = require("./src/routes/characters");
const PORT = 3001;

//* MIDDLEWARES
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); //Autorizo recibir solicitudes de este dominio
  res.header('Access-Control-Allow-Credentials', true); //Autorizo recibir solicitudes que incluyan el encabezado con credenciales
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //Autorizo recibir solicitudes con dichos hedears
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); //Autorizo las solicitudes tipo GET, POST, OPTIONS, PUT y DELETE.
  next();
});

server.use(morgan("dev"));
server.use(express.json());
server.use("/api", apiRouter);
server.use("/character", characterRouter);

//* RUTAS
server.get("/", (req, res) => {
  console.log("Estoy en el path '/'");
  res.send("Hola Mundo!!!");
});

server.listen(
  PORT,
  console.log(`Server listening on http://localhost:${PORT}`)
);
