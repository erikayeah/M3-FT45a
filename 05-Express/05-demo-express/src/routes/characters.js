const { Router } = require("express");
const characterRouter = Router();

const characters = [
  { id: 1, name: "Rick" },
  { id: 2, name: "Morty" },
];

characterRouter.get("/:id", (req, res) => {
  const { id }= req.params;
  const character = characters.find(
    char => char.id === Number(id)
  );
  if(character) {
    return res.status(200).json(character);
  }
  res.status(404).json({ message: "Personaje no encontrado"});
})

characterRouter.post("/", (req, res) => {
  console.log(req.body);
  const { id, name, status } = req.body;
  if(id && name && status ) {
    characters.push(req.body);
    return res.status(200).json(characters);
  }
  res.status(400).json({ message: "Faltan datos..."});
})

module.exports = characterRouter;