//импорт библиотек
import readlineSync from 'readline-sync';

//логика - сами функции
const brainEven = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i=0; i<=2; i++) {
    let randomNumber = Math.round(Math.random()*100);
    console.log('Question: '+ randomNumber);
    const userAnswer = readlineSync.question('Your answer: '); 
    let correctAnswer = '';
    if (randomNumber%2 === 0) {
         correctAnswer = 'yes';
    } else {
         correctAnswer =  'no'; 
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


export default brainEven;


