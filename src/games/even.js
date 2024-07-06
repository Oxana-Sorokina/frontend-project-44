import getRandomInt from '../utils/random-number.js';

export const rules =
  'Answer "yes" if the number is even, otherwise answer "no".';

export const getUniqGame = () => {
  const question = getRandomInt(1, 100);

  const affAnswer = 'yes';
  const nayAnswer = 'no';
  const correctAnswer = question % 2 === 0 ? affAnswer : nayAnswer;

  return {
    question,
    correctAnswer,
  };
};

export const checkAnswer = (userAnswer, correctAnswer) => {
  return userAnswer === correctAnswer;
};
