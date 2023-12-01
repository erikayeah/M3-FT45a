const express = require("express");
const server = express();
const morgan = require('morgan')
const PORT = 3001;

//* MIDDLEWARES
server.use(morgan("dev"));

const pass = "1234";
server.use("/", (req, res, next) => {
  pass === "1234"
    ? next()
    : res.send("NO autorizado!!!");
});

// server.use("/home", (req, res, next) => {
//   console.log("Path:", req.url);
//   next();
// })

//* RUTAS
server.get("/", (req, res) => {
  console.log("Estoy en el path '/'");
  //* Manejo de rutas mas dinámico
  //* Manejo de rutas por separado
  //* Envia status code 200 por default
  //* content-type automático
  res.send("Hola Mundo!!!");
});

server.get("/home", (req, res) => {
  res.send("Estoy en '/home'");
});

server.get("/api/:name/:lastname", (req, res) => {
  //* localhost/api/algo/algo
  //* req.params = { name: "Rick", lastname: "Sanchez", id: "1" }
  res.json(req.params);
});
server.get("/api/:name/:lastname/:id", (req, res) => {
  //* localhost/api/algo/algo/algomas
  //* req.params = { name: "Rick", lastname: "Sanchez", id: "1" }
  res.json(req.params);
});

const characters = [
  { id: 1, name: "Rick" },
  { id: 2, name: "Morty" },
];
server.get("/character/:id", (req, res) => {
  //* /character/2
  //* req.params = { id: "2" }
  const { id }= req.params;
  const character = characters.find(
    //* find => { } || undefined
    char => char.id === Number(id)
  );
  if(character) {
    return res.status(200).json(character);
  }
  res.status(404).json({ message: "Personaje no encontrado"});
})

// server.post("/character", (req, res) => {
//   //* http://localhost:3001/character?id=3&name=Summer
//   // const id = req.query.id;
//   // const name = req.query.name;
//   const { id, name } = req.query;
//   if(id && name) {
//     characters.push({ id, name });
//     return res.status(200).json(characters);
//   }
//   res.status(400).json({ message: "Faltan datos..."});
// })

server.use(express.json());
//! RECIBIR JSON DESDE REQ.BODY

server.post("/character", (req, res) => {
  //* http://localhost:3001/character?id=3&name=Summer
  //* req.query = { id, name, ... }
  console.log(req.body);
  const { id, name, status } = req.body;
  if(id && name && status ) {
    characters.push(req.body);
    return res.status(200).json(characters);
  }
  res.status(400).json({ message: "Faltan datos..."});
})



server.listen(
  PORT,
  console.log(`Server listening on http://localhost:${PORT}`)
);
