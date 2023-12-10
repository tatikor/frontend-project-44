//импорт библиотек
import readlineSync from 'readline-sync';

//логика - сами функции
const brainCalc = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('What is the result of the expression?');
    
    for (let i=0; i<=2; i++) {
    let arr = ['+','-','*'];  
    let n = Math.floor(Math.random()*arr.length);
    let firstNum = Math.round(Math.random()*100);
    let secondNum = Math.round(Math.random()*100);
    let exp = arr[n]
   
    let randomExpression = firstNum + exp + secondNum;
    console.log('Question: '+ randomExpression);
    const userAnswer = readlineSync.question('Your answer: ');
    
    let correctAnswer = '';

    if (exp === '+') {
        correctAnswer += firstNum + secondNum;
    }
    if (exp === '-') {
        correctAnswer += firstNum - secondNum;
    }
    if (exp === '*') {
        correctAnswer += firstNum * secondNum;
    }

    if (correctAnswer === userAnswer) {
         console.log("correct!");
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        break;
    }

    if (i===2) {
        console.log(`Congratulations, ${userName}!`);
    }
}
};

export default brainCalc;