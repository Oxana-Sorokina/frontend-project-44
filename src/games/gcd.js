import readlineSync from 'readline-sync';
import userName from '../cli.js';

const getUserGameGcd = () => {
    let i = 0; 
    let count = 3;
    userName;
    console.log('Find the greatest common divisor of given numbers.');

    const getRandomInt = () => {
        return Math.floor(Math.random() * 100) + 1;
    }


    while (i < count) {
        const randomNumber1 = getRandomInt();
        const randomNumber2 = getRandomInt();
        const randomNumbers= `${randomNumber1} ${randomNumber2}`;
        console.log(`Question: ${randomExpression}`);
}

getUserGameGcd();

export default getUserGameGcd;  
