var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('guess> ');
rl.prompt();
rl.on('line', function(line) {
    console.log('ejecute function')
    if (line === "right"){
        console.log('ejecute right')
    }else if (line === 'exit')
    rl.close();
    rl.prompt();  
}).on('close',function() {
 process.exit(0)
});