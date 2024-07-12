import getRandomInt from '../utils/random-number.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getUniqGame = () => {
  const question = getRandomInt(1, 100);

  const affAnswer = 'yes';
  const nayAnswer = 'no';
  const correctAnswer = question % 2 === 0 ? affAnswer : nayAnswer;

  return {
    question,
    correctAnswer,
  };
};

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export { rules, getUniqGame, checkAnswer };
