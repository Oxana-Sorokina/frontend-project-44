import readlineSync from 'readline-sync';
import getUserName from './cli.js';

   
const checkingAnswer = () => {
    const affAnswer = 'yes';
    const nayAnswer = 'no';
    let i = 0; 
    let count = 3;
    getUserName;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const getRandomInt = () => {
        return Math.floor(Math.random() * 100) + 1;
    }

    while (i < count) {
        const randomNumber = getRandomInt();
        const evenNumber = randomNumber % 2 === 0;
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if ((evenNumber && userAnswer === affAnswer) || (!evenNumber && userAnswer === nayAnswer)) {
            console.log('Correct!');
        } else if (userAnswer !== 'yes' && userAnswer !== 'no') {
            console.log(`'${userAnswer}' is wrong answer ;(. Please answer 'yes' or 'no'.\nLet's try again, ${getUserName}!`); 
            break;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Please answer 'yes' or 'no'.\nLet's try again, ${getUserName}!`); 
            break;
        }

        i++;
    }

    if (i === count) {
      return (`Congratulations, ${getUserName}!`);
    }
};

console.log(checkingAnswer());

export default checkingAnswer;