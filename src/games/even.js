import getGameWithUser from '../index.js';
   
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const generateQuestion = () => {
    return getRandomInt().toString();  
};

const getUniqGame = (question) => {
    const affAnswer = 'yes';
    const nayAnswer = 'no';
    const number = parseInt(question, 10);
    return number % 2 === 0 ? affAnswer : nayAnswer;
}

const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
}

getGameWithUser(rules, generateQuestion, getUniqGame, checkAnswer);