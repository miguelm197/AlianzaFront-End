const readline = require('readline');

var rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for valuable feedback: ${answer}`);

    rl.close();
});