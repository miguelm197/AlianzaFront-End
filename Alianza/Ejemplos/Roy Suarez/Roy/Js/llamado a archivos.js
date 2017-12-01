fs = require('fs');

console.log('Hola soy un ejemplo')
fs.readFile('estudiantes.csv', 'utf-8', leerDatos);


function leerDatos(error, data) {
    if (error)
        return console.log(error);
        
    console.log('data:', data);
    console.log('error:', error);
}