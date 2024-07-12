import getRandomInt from '../utils/random-number.js';

const rules = 'What is the result of the expression?';

const getUniqGame = () => {
  const randomNumber1 = getRandomInt(2, 100);
  const randomNumber2 = getRandomInt(2, 100);
  const operators = ['+', '-', '*'];
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

  let calculationResult;

  switch (randomOperator) {
    case '+':
      calculationResult = Number(randomNumber1) + Number(randomNumber2);
      break;
    case '-':
      calculationResult = Number(randomNumber1) - Number(randomNumber2);
      break;
    case '*':
      calculationResult = Number(randomNumber1) * Number(randomNumber2);
      break;
    default: break;
  }
  const correctAnswer = calculationResult;

  return {
    question,
    correctAnswer,
  };
};

const checkAnswer = (userAnswer, correctAnswer) => parseInt(userAnswer, 10) === correctAnswer;

export { rules, getUniqGame, checkAnswer };
