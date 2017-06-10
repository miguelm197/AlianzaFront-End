var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout)
rl.prompt();
rl.on('line', function(line) {
    if (line === "right"){
    }else if (line === 'exit')
    rl.close();
    rl.prompt();  
}).on('close',function() {
 process.exit(0)
});