const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print, args) {
   print(process.cwd());
};

function date(print) {
   print(Date());
}

function echo(print, args) { //Aca podria ahcer tmb el join de args, aca o en bash, pero lo hago en bash asi funciona para todos los comandos.
print(args)
}

function ls(print) {
   fs.readdir('.', (error, files) => {
      
      if (error) {
         throw error
      } else {
      print(files.join(' '));
      }
   })
}

function cat(print, args) {
   fs.readFile(args, 'utf-8', (error, data) => {
      if (error) {
         throw(error)
      } else {
         print (data)
      }
   })
}

function head(print, args) {
   fs.readFile(args, 'utf-8', (error, data) => {
      if (error) {
         throw(error)
      } else {
         const primeraLinea = data.split('\n')[0];//Separa por el salto de linea /n
         print(primeraLinea);
      }
   })
}

function tail(print, args) {
   fs.readFile(args, 'utf-8', (error, data) => {
      if (error) {
         throw(error)
      } else {
         const linea = data.split('\n');
         const ultimaLinea = linea.at(-1).trim(); 
         print(ultimaLinea);
      }
   })
}

function curl(print, args) {
   utils.request(args, (error, response) => {
      if (error)  throw new Error (error); //Asi, al instanciar nuevo error, corto la ejecucion, asi q abajo sigo normalmente. Esto puedo hacerlo tmb en las otras fn.
      print(response) 
   })
}

module.exports = {
   pwd,
   date,
   echo,
   ls,
   cat,
   head,
   tail,
   curl
};
