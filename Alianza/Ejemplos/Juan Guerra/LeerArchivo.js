fs = require("fs"); // ("FS" es el sistema de archivos de NodeJs - "Require" IMPORTA a "FS"" en este caso)

console.log('Hola leeré un archivo usando una función que definiré un poco más abajo') // La consola mostrará este mensaje entre paréntesis
fs.readFile('EEUU.txt', 'utf-8' , leerDatos); // FS usa el evento "readFile" para leer el archivo "historia_newton" y usa el set de caracteres "utf-8"

function leerDatos(err, data) { //se llama a dos eventos como parametros de la función: err ,data

    if (err)
        return console.log('Hubo un error!',err);
        
    console.log('data:' , data);
}

