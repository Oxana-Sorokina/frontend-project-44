import getRandomInt from '../utils/random-number.js';

export const rules =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

export const getUniqGame = () => {
  const question = getRandomInt(2, 100);

  const isPrime = (question) => {
    const affAnswer = 'yes';
    const nayAnswer = 'no';
    const number = question;
    if (number < 2) {
      return nayAnswer;
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return nayAnswer;
      }
    }
    return affAnswer;
  };

  const correctAnswer = isPrime(question);

  return {
    question,
    correctAnswer,
  };
};

export const checkAnswer = (userAnswer, correctAnswer) => {
  return userAnswer === correctAnswer;
};
