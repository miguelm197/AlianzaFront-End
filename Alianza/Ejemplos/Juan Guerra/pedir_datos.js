const readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
});

rl.question('What do you think of Node.js?', (answer) => {
    //Todo: log the answer in a database
    console.log('Thank you for your valuable feedback: $(answer)');

    rl.close();
});