export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getRandomInt = () => {
    return Math.floor(Math.random() * 99) + 2; // нам не нужно, чтобы выводилось 1, сдвинем диапазон чисел
};

export const getUniqGame = () => {
    const question = getRandomInt(); 
    
    const isPrime = (question) => {
        const affAnswer = 'yes';
        const nayAnswer = 'no';
        const number = question;
        if (number < 2) {
            return nayAnswer;
        }
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
        return nayAnswer;
            } 
        }
        return affAnswer;
    };

    const correctAnswer = isPrime(question);

    return {
        question,
        correctAnswer
    };
    
};

export const checkAnswer = (userAnswer, correctAnswer) => {
    return userAnswer === correctAnswer;
};
