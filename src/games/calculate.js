export const rules = 'What is the result of the expression?';
    
const getRandomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
}

export const getUniqGame = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    const question = `${randomNumber1} ${randomOperator} ${randomNumber2}`;

    let expressionOptions;

    switch (randomOperator) {
        case '+':
            expressionOptions = Number(randomNumber1) + Number(randomNumber2);
            break;
        case '-':
            expressionOptions = Number(randomNumber1) - Number(randomNumber2);
            break;
        case '*':
            expressionOptions = Number(randomNumber1) * Number(randomNumber2);
            break;
    }
    const correctAnswer = expressionOptions.toString();

    return {
        question,
        correctAnswer
    };
};  
 
export const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
};