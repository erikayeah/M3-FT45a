const axios = require('axios');

const summer = axios.get("https://rickandmortyapi.com/api/character/3")
  .then(infoDesdeAPI => console.log(infoDesdeAPI.data))
  .catch(error => console.log(error))

//* HTTP METHODS: GET POST PUT DELETE
// console.log(summer);