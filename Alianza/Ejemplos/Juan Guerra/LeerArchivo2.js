var readline = require('readline');
/* 'require' es un método de Node.js para llamar módulos; 'readline'es un módulo que permite leer una secuencia de datos
línea a línea (una a la vez)*/
var rl = readline.createInterface(process.stdin, process.stdout); /* 'creatInterface' crea en este caso un interface de entrada y salida*/

var notas = [];
rl.setPrompt('type here> ');
/* inicia un Prompt con el mensaje dentro de los apóstrofes */ 
rl.prompt(); /*Prepara el Prompt colocando las opciones de 'setPrompt' en un nuevo archivo y dando la posibilidad de escribir al user*/
rl.on('line', function(line) {
    
    notas.push(line); /* 'push' agrega un nuevo elemento al array; 'line' toma la linea ingresada cuando el user presiona 'enter' */
    if (line > 5) {
        console.log('Aprobó');
    }else if (line <=5) {  
        console.log('Perdió');

    }else{
        rl.close(); /*cierra el prompt*/
    }
    rl.prompt();
}).on('close',function(){ /* 'close' es emitido cuando el servidor cierra 
    notas.pop(); /* 'pop' remueve el ultimo elemento de un 'array', en este caso, del array "notas" */
    console.log(notas); /*imprime en pantalla el array "notas" */
    process.exit(0); /* finaliza el proceso y sale. En este caso el resultado es "success" porque se le pasa "0".
                        si fuese "1" el valor, seria finalizado de manera errónea */
});
