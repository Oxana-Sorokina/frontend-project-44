import readlineSync from 'readline-sync';
import getWelcomeUser from './cli.js';

const getGameWithUser = (rules, getUniqGame, checkAnswer) => {
  const userName = getWelcomeUser();
  console.log(rules);

  let i = 0;
  const count = 3;

  while (i < count) {
    const gameRound = getUniqGame();
    console.log(`Question: ${gameRound.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (checkAnswer(userAnswer, gameRound.correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${gameRound.correctAnswer}'.\nLet's try again, ${userName}!`,
      );
      return;
    }
    i = i + 1;
  }
  console.log(`Congratulations, ${userName}!`);
};

export default getGameWithUser;
