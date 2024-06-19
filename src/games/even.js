import readlineSync from 'readline-sync';
import getWelcomeUser from '../cli.js';

   
const getUserGameEven = () => {
    const affAnswer = 'yes';
    const nayAnswer = 'no';
    let i = 0; 
    let count = 3;
    const userName = getWelcomeUser();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    const getRandomInt = () => {
        return Math.floor(Math.random() * 100) + 1;
    }

    while (i < count) {
        const randomNumber = getRandomInt();
        const isNumberEven = randomNumber % 2 === 0;
        console.log(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if ((isNumberEven && userAnswer === affAnswer) || (!isNumberEven && userAnswer === nayAnswer)) {
            console.log('Correct!');
        } else if (isNumberEven && userAnswer === nayAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`); 
            break;
        } else if (!isNumberEven && userAnswer === affAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`); 
            break;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Please answer 'yes' or 'no'.\nLet's try again, ${userName}!`); 
            break;
        }

        i++;
    }

    if (i === count) {
      console.log (`Congratulations, ${userName}!`);
    }
};


export default getUserGameEven;         