export const rules = 'What number is missing in the progression?';

//рандомное число от 1 до 50 включительно
const getRandomInt = () => {
    return Math.floor(Math.random() * 50) + 1;
};

//рандомное число для шага от 1 до 20 включительно
const getRandomStep = () => {
    return Math.floor(Math.random() * 20) + 1;
};

//рандомное число длины прогрессии от 5 до 10 включительно
const getRandomLength = () => {
    return Math.floor(Math.random() * 6) + 5;
};

export const generateQuestion = () => {
    const randomNumber = getRandomInt();
    const randomStep = getRandomStep();
    const randomLength = getRandomLength();
    const randomIndex = Math.floor(Math.random() * randomLength);
    let progressionMember = randomNumber;
    let result = [progressionMember];

    for (let i = 1; i < randomLength; i += 1) {
            progressionMember += randomStep;
            result.push(progressionMember);
    }

    const removedElement = result[randomIndex];

    result[randomIndex] = '..';

    const progressionString = result.join(' ');

    return {
    progression: progressionString,
    removedElement
    };
};

export const getUniqGame = (question) => {
    return question.removedElement;
};

export const checkAnswer = (userAnswer, correctAnswer) => {
    return parseInt(userAnswer, 10) === correctAnswer;
};


//result.splice(randomIndex, 1, '..');
//return result.join(' '); 
//нужно положить в переменную число, которое он заменил точками и потом мы это число сравним с ответом пользователя