export const rules = 'Find the greatest common divisor of given numbers.'

const getRandomInt = () => {
    return Math.floor(Math.random() * 100) + 1;
}

export const generateQuestion = () => {
    const randomNumber1 = getRandomInt();
    const randomNumber2 = getRandomInt();
    return `${randomNumber1} ${randomNumber2}`;
};

export const getUniqGame = (question) => {
    const [randomNumber1, randomNumber2] = question.split(' '); // возвращает массив строк
    let number1 = parseInt(randomNumber1, 10); //преобразуем в целое число
    let number2 = parseInt(randomNumber2, 10); //преобразуем в целое число
    //цикл продолжается, пока числа не станут равны нулю
    while (number1 !== 0 && number2 !== 0){
        if (number1 > number2) { //если первое больше второго, то первому присваиваем остаток от деления первого на второе
            number1 = number1 % number2;
        } else {
            number2 = number2 % number1;//наоборот
        }
      }
      return number1 || number2; //оставшееся не нулевое число и есть НОД
};

export const checkAnswer = (userAnswer, correctAnswer) => {
    return parseInt(userAnswer, 10) === correctAnswer;
};