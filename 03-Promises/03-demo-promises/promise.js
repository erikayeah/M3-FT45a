//? PROMESA
let promise = {
  status: "pending",
  resolve: null
}

//* RESUELTA
promise = {
  status: "fulfilled",
  resolve: "Info / Sal / Character"
}

//! RECHAZADA
promise = {
  status: "rejected",
  resolve: "Motivo del rechazo"
}

promise.then(
  //* succesHandler
  (data) => {console.log(data)},
  //! errorHandler
  (error) => {console.log(error)}
)