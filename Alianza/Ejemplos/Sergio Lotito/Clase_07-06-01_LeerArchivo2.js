var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var notas = [];
rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', function(line) {
    //console.log('ejecute funcion')
    notas.push(line);
    if (line > 5) {
        console.log('APROBO');
    }else if (line <=5) {  // if(line <= 5)
        console.log('REPROBO');

    }else{
        rl.close();
    }
    rl.prompt();
}).on('close',function(){
    notas.pop();
    console.log(notas);
    process.exit(0);
});



