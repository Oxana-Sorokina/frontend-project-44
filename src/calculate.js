import readlineSync from 'readline-sync';
import userName from './cli.js';

const getUserCalculator = () => {
    let i = 0; 
    let count = 3;
    userName;
    console.log('What is the result of the expression?');

    const getRandomInt = () => {
        return Math.floor(Math.random() * 100) + 1;
    }

   
    while (i < count) {
        const randomNumber1 = getRandomInt();
        const randomNumber2 = getRandomInt();
        const operators = ['+', '-', '*'];
        const randomOperator = operators[Math.floor(Math.random() * operators.length)];
        const randomExpression = `${randomNumber1} ${randomOperator} ${randomNumber2}`
        console.log(`Question: ${randomExpression}`);
        const userAnswerCalculator = readlineSync.question('Your answer: ');

        let correctAnswer;
        if (randomOperator === '+') {
            correctAnswer = randomNumber1 + randomNumber2;
        } else if (randomOperator === '-') {
            correctAnswer = randomNumber1 - randomNumber2;
        } else {
            correctAnswer = randomNumber1 * randomNumber2;
        }
       
        if (parseInt(userAnswerCalculator, 10) === correctAnswer) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswerCalculator} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`)
            break; 
        }

          i++;

          if (i === count) {
            console.log (`Congratulations, ${userName}!`);
          }
        }
    }


export default getUserCalculator;  