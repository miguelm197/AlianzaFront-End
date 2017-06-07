/*var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('comando> ');
rl.prompt();
rl.on('line', function (line) {
    //    console.log('ejecute funcion')
    if (line == "init") {
        console.log('... Iniciando máquina ...')
    } else if (line == 'hola') {
        console.log("maquina dice: hola humano")
    } else if (line == 'adios') {
        console.log("maquina dice: adios humano")
    } else if (line == 'comandos') {
        console.log("-init\n-hola\n-adios\n-comandos\n-exit")
    } else if (line == 'exit') {
        rl.close();
    } else
        console.log("Comando incorrecto...")

    rl.prompt();
}).on('close', function () {
    process.exit(0);
});*/
node();
function node() {

    var readline = require('readline');
    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt('comando> ');
    rl.prompt();
    rl.on('line', function (line) {
        //    console.log('ejecute funcion')
        if (line == "init") {
            console.log('... Iniciando máquina ...')
        } else if (line == 'hola') {
            console.log("maquina dice: hola humano")
        } else if (line == 'adios') {
            console.log("maquina dice: adios humano")
        } else if (line == 'comandos') {
            console.log("-init\n-hola\n-adios\n-comandos\n-exit")
        } else if (line == 'exit') {
            rl.close();
        } else
            console.log("Comando incorrecto...")

        rl.prompt();
    }).on('close', function () {
        process.exit(0);
    });
}