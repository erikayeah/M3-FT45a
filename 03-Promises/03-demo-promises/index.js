function cortarLechuga() {
	console.log("Cortar Lechuga");
}
function cortarTomate() {
	console.log("Cortar Tomate");
}
function comprarAceite() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Agregar Aceite");
    }, 2000);
  })
}
function comprarSal() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Agregar Sal");
    }, 0);
  })
}
function servir() {
	console.log("Servir!!!");
}

cortarLechuga();
cortarTomate();
comprarAceite()
  .then(response => {
    console.log(response);
    return comprarSal();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error))
  .finally(() => servir())


  
// cortarLechuga();
// cortarTomate();
// comprarAceite();
// comprarSal();
// servir();

// cortarLechuga();
// cortarTomate();
// comprarAceite(() => {
// 	comprarSal(() => {
// 		servir();
// 	})
// });