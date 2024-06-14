import readlineSync from 'readline-sync';


console.log("Welcome to the Brain Games!");

const getUserName = readlineSync.question('May I have your name? ');

console.log('Hello, ' + getUserName + '!');


export default getUserName;
