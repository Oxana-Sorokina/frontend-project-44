import getRandomInt from '../utils/random-number.js';

export const rules = 'What is the result of the expression?';

export const getUniqGame = () => {
  const randomNumber1 = getRandomInt(2, 100);
  const randomNumber2 = getRandomInt(2, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  let calculationResult;

  switch (randomOperator) {
    default: return;
    case '+':
      calculationResult = Number(randomNumber1) + Number(randomNumber2);
      break;
    case '-':
      calculationResult = Number(randomNumber1) - Number(randomNumber2);
      break;
    case '*':
      calculationResult = Number(randomNumber1) * Number(randomNumber2);
      break;
  }
  const correctAnswer = calculationResult;

  return {
    question,
    correctAnswer,
  };
};

export const checkAnswer = (userAnswer, correctAnswer) => parseInt(userAnswer, 10) === correctAnswer;
