import getRandomInt from '../utils/random-number.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getUniqGame = () => {
  const question = getRandomInt(2, 100);

  const isPrime = () => {
    const affAnswer = 'yes';
    const nayAnswer = 'no';
    const number = question;
    if (number < 2) {
      return nayAnswer;
    }
    for (let i = 2; i < number; i += 1) {
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

const checkAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;

export { rules, getUniqGame, checkAnswer };
