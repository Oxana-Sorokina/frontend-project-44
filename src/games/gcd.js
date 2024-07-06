import getRandomInt from '../utils/random-number.js';

export const rules = 'Find the greatest common divisor of given numbers.';

export const getUniqGame = () => {
  let randomNumber1 = getRandomInt(1, 100);
  let randomNumber2 = getRandomInt(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;

  //цикл продолжается, пока числа не станут равны нулю
  while (randomNumber1 !== 0 && randomNumber2 !== 0) {
    if (randomNumber1 > randomNumber2) {
      //если первое больше второго, то первому присваиваем остаток от деления первого на второе
      randomNumber1 = randomNumber1 % randomNumber2;
    } else {
      randomNumber2 = randomNumber2 % randomNumber1; //наоборот
    }
  }
  const correctAnswer = randomNumber1 || randomNumber2; //оставшееся не нулевое число и есть НОД

  return {
    question,
    correctAnswer,
  };
};

export const checkAnswer = (userAnswer, correctAnswer) => {
  return parseInt(userAnswer, 10) === correctAnswer;
};
