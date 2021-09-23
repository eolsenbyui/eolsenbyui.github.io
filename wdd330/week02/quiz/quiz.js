const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.clear();
  
  readline.question(`What's your name? `, name => {
    console.log(`Hi ${name}!`)
    readline.close()
  });
  