var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var notas;
rl.setPrompt('ingrese nota o "salir"> ');
rl.prompt();
rl.on('line', function(line) { 
    console.log('juicio final:')
    if (line > 5){
        notas.push(line);
        console.log('Aprobado')
    }else if(line < 6){
        console.log('Reprobado')
        notas.push(line)
    }else if(line === 'salir')
        for(var i=0;i < notas.lenght;i++){
            console.log(notas[i])
        }
        rl.close();
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});