export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
};

export const getUniqGame = () => {
    const question = getRandomInt();  

    const affAnswer = 'yes';
    const nayAnswer = 'no';
    const correctAnswer = question % 2 === 0 ? affAnswer : nayAnswer;

    return {
        question,
        correctAnswer
    };
};

export const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
};