const readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js?', (answer) => {
    // TODO: log the answer in a database
    console.log('Thank you for your valuable feedback: ${answer}');

    rl.close();
});
