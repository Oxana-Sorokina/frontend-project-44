import readlineSync from 'readline-sync';
import getWelcomeUser from './cli.js';

const getGameWithUser = (rules, generateQuestion, getUniqGame, checkAnswer) => {
    const userName = getWelcomeUser();
    console.log(rules);

    let i = 0; 
    let count = 3;

    while (i < count) {
        const question = generateQuestion();
        const correctAnswer = getUniqGame(question);
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question('Your answer: ');

        if (checkAnswer(userAnswer, correctAnswer)) {
            console.log('Correct!');
        } else {
            console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`)
            break;
        }
        i++;
    }

    if (i === count) {
        console.log(`Congratulations, ${userName}!`);
      }
};


export default getGameWithUser;  