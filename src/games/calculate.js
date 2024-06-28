export const rules = 'What is the result of the expression?';
    
const getRandomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
}

export const generateQuestion = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
};
        
export const getUniqGame = (question) => {
    const [randomNumber1, operator, randomNumber2] = question.split(' ');
    let correctAnswer;

    switch (operator) {
        case '+':
            correctAnswer = Number(randomNumber1) + Number(randomNumber2);
            break;
        case '-':
            correctAnswer = Number(randomNumber1) - Number(randomNumber2);
            break;
        case '*':
            correctAnswer = Number(randomNumber1) * Number(randomNumber2);
            break;
    }
    return correctAnswer.toString();
};  
 
export const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
};