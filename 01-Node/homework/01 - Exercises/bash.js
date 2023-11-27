const process = require('process');
const { Z_ASCII } = require('zlib');
const commands = require('./commands/index.js');
const { log } = require('console');


const bash = () => {
   process.stdout.write("prompt > ");
   process.stdin.on('data', (data) => {
   //* Aquí puedes manejar la entrada de datos (comandos) del usuario
   //* La variable 'data' contendrá la entrada del usuario
   const args = data.toString().trim().split(' '); //*Lo convierto a string y le saco los espacios de mas por delante, y divide la cadena en cada espacio en blanco.
   const cmd = args[0];

   if (commands.hasOwnProperty(cmd)) {

      commands[cmd](print, args);

   } else {
      print(`command not found: ${cmd}`)
   }
   })
}


// const verificar = () => {

//    if (commands.hasOwnProperty('cmd')) {
//       // Si existe, ejecuta la función correspondiente al comando
//       console.log('SI EXISTE!!!!');;
//     } else {
//       console.log(`NO ESTAAAAAAAAAAA`);
//     }
//    }

 //  console.log(verificar());

const print = (output) => {
//* stdout: Es una abreviatura de "standard output" (salida estándar) y es un flujo de datos que se utiliza para enviar información desde un programa de computadora a la pantalla o a otro programa.
//*.write(): Es un método que se utiliza para escribir datos en un flujo de salida. En este caso, se está escribiendo el contenido de la variable output en la salida estándar.
process.stdout.write(output);
process.stdout.write("\nprompt > ");
};


bash();
module.exports = {
   print,
   bash,
};
