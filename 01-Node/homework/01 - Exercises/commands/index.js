const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
   print(process.cwd());
};

function date(print) {
   print(Date());
}

function echo(print, ...args) {
print(...args)
}

function ls(print) {
   fs.readdir('.', (error, files) => {
      if (error) {
         throw error
      } else {

      const filesString = files.join(' ');
      print(filesString);
      }
   })
}

function cat(print, ...args) {
   fs.readFile(...args, 'utf-8', (error, data) => {
      if (error) {
         throw(error)
      } else {
         print (data)
      }
   })
}

function head(print, ...args) {
   fs.readFile(...args, 'utf-8', (error, data) => {
      if (error) {
         throw(error)
      } else {
         const primeraLinea = data.split('\n')[0];
         print(primeraLinea);
      }
   })
}

function tail(print, ...args) {
   fs.readFile(...args, 'utf-8', (error, data) => {
      if (error) {
         throw(error)
      } else {
         const linea = data.split('\n');
         const ultimaLinea = linea[linea.length - 1].trim();
         print(ultimaLinea);
      }
   })
}

function curl(print, ...args) {
   utils.request(...args, (error, response) => {
      if (error) {
         throw(error)
      } else{
         print(response)
      }
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
