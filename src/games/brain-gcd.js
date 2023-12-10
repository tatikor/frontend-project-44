//импорт библиотек
import readlineSync from 'readline-sync';

//логика - сами функции
const NOD = (A) => {   
    let n = A.length, x = Math.abs(A[0]);
    for (let i = 1; i < n; i++)
     { let y = Math.abs(A[ i ]);
       while (x && y){ x > y ? x %= y : y %= x; }
       x += y;
     }
    return x;
}

const brainGcd = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Find the greatest common divisor of given numbers.');
    for (let i=0; i<=2; i++) {
    let randomNumber1 = Math.round(Math.random()*100);
    let randomNumber2 = Math.round(Math.random()*100);
    console.log('Question: ', randomNumber1, randomNumber2);
    const userAnswerStr = readlineSync.question('Your answer: ');
    const userAnswer = Number(userAnswerStr);
    let correctAnswer = NOD([randomNumber1, randomNumber2]);

    if (correctAnswer === userAnswer) {
         console.log("correct!");
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        break;
    }
    if (i===2) {
        console.log(`Congratulations ${userName}!`);
    }
}
};

export default brainGcd;
    


