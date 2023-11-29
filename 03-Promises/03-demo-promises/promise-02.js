const fs = require("fs");

const myPromise = new Promise((resolve, reject) => {
  //* Código asíncrono
  fs.readFile(
    __dirname + "/archivo.txt", "utf-8", (error, data) => {
      if(error) return reject(error);
      else return resolve(data);
    }
  )
});

console.log(myPromise);

myPromise
  .then(
    //* succesHandler
    (data) => {
      console.log("data-01:", data);
      return "Nueva Invo...";
    },
    //! errorHandler
    // (error) => {console.log("error:", error)},
  ) //* Devuelve otra promesa !!!
  .then(
        //* succesHandler
        (data) => {console.log("data-02:", data)},
        //! errorHandler
        // (error) => {console.log("error:", error)},
  )
  // .then(null, errorHandler)
  .catch(
    //! errorHandler
    (error) => {console.log("error:", error)}
  )
  .finally(() => console.log("Finalizado..."))

  // console.log("Finalizado...");