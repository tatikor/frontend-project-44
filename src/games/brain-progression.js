//импорт библиотек
import readlineSync from 'readline-sync';

//логика - сами функции
const makingArray = () => { 
    let firstNum = Math.round(Math.random()*100);
    let arrlength = Math.ceil(Math.random()*5 +5);
    let step = Math.ceil(Math.random()*5 +5);
    let array = [firstNum];  
    for (let i=0; i<=arrlength; i++) {
        let nextNum = array[i] + step;
        array.push(nextNum);
     }
    return array;
}

const brainProgression = () => {
    console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
    console.log('What number is missing in the progression?');
    for (let i=0; i<=2; i++) {
    let array = makingArray();
    let randomIndex = Math.floor(Math.random() * (array.length));
    let x = array[randomIndex];
    array[randomIndex] = '..';
    console.log('Question: ' + array);
    const userAnswerStr = readlineSync.question('Your answer: ');
    const userAnswer = Number(userAnswerStr);
    let correctAnswer = x;
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
}
    
export default brainProgression;

    


