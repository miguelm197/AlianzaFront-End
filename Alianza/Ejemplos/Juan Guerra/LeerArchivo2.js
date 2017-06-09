var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var notas = [];
rl.setPrompt('type here> ');
rl.prompt();
rl.on('line', function(line) {
    
    notas.push(line);
    if (line > 5) {
        console.log('Aprobó');
    }else if (line <=5) {  
        console.log('Perdió');

    }else{
        rl.close();
    }
    rl.prompt();
}).on('close',function(){
    notas.pop();
    console.log(notas);
    process.exit(0);
});