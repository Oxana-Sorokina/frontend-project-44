import getRandomInt from '../utils/random-number.js';

export const rules = 'What number is missing in the progression?';

export const getUniqGame = () => {
  const randomNumber = getRandomInt(1, 100);
  const randomStep = getRandomInt(3, 20);
  const randomLength = getRandomInt(5, 10);
  const randomIndex = Math.floor(Math.random() * randomLength);
  let progressionMember = randomNumber;
  const result = [progressionMember];

  for (let i = 1; i < randomLength; i += 1) {
    progressionMember += randomStep;
    result.push(progressionMember);
  }

  const correctAnswer = result.splice(randomIndex, 1, '..').join(' ');
  const question = result.join(' ');

  return {
    question,
    correctAnswer,
  };
};

export const checkAnswer = (userAnswer, correctAnswer) => { return userAnswer === correctAnswer;
};
