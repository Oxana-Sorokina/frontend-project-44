import getGameWithUser from '../index.js';
   
export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
};

export const generateQuestion = () => {
    return getRandomInt();
};

export const getUniqGame = (question) => {
    const affAnswer = 'yes';
    const nayAnswer = 'no';
    return question % 2 === 0 ? affAnswer : nayAnswer;
}

export const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
}

getGameWithUser();



//rules, generateQuestion, getUniqGame, checkAnswer