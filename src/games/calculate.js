import getGameWithUser from '../index.js';
   
const rules = 'What is the result of the expression?';
    
const getRandomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
}

const generateQuestion = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    const operators = ['+', '-', '*'];
    const randomOperator = operators[Math.floor(Math.random() * operators.length)];
    return `${randomNumber1} ${randomOperator} ${randomNumber2}`;
};
        
const getUniqGame = (question) => {
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
 
const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
};
 
getGameWithUser(rules, generateQuestion, getUniqGame, checkAnswer);




//const getUserCalculator = () => {

 //if (randomOperator === '+') {
        //correctAnswer = randomNumber1 + randomNumber2;
    //} else if (randomOperator === '-') {
        //correctAnswer = randomNumber1 - randomNumber2;
    //} else {
        //correctAnswer = randomNumber1 * randomNumber2;
    //}
    //return correctAnswer.toString();
//};


//default:
    //throw new Error(`Unknown operator: ${operator}`);

//export default getUserCalculator;  

//getGameWithUser(rules, generateQuestion, getUniqGame, checkAnswer);