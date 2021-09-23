const fs = require('fs');

process.stdin.setEncoding('utf-8');

const readline = () => {
    let buffer = new ArrayBuffer(255);
    let view = new DataView(buffer, 0);
    let nBytes = fs.readSync(process.stdin.fd, view, 0, 255, 0);
    return String.fromCharCode.apply(null, new Uint8Array(buffer)).substr(0, nBytes).trimEnd();
}

const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
]

const ask = question => {
    console.log(question);
    return readline();
}

const check = (response, answer) => {
    if (response === answer) {
        console.log("Correct!");
        score++;
    } else {
        console.log(`Wrong! The correct answer is ${answer}`);
    }
}

console.clear();

console.log("Welcome to the interactive Quiz Ninja!\n");

let score = 0;

// main game loop
for (const [question, answer] of quiz) {
    const response = ask(question);
    check(response, answer);
}


console.log(`\nGame Over.  You scored ${score} point${score !== 1 ? 's' : ''}`);
