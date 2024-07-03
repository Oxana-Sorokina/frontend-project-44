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

export const getUniqGame = () => {
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

    const correctAnswer = result.splice(randomIndex, 1, '..').join(' ');
    const question = result.join(' '); 
    
    return {
        question,
        correctAnswer
    };
};

export const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
};