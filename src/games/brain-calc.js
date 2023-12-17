//импорт библиотек
import game from '../index.js';
//логика - сами функции
const brainCalc = () => {
    const rules = 'What is the result of the expression?';
    const gameFunction = () => {
        let arr = ['+','-','*'];  
        let n = Math.floor(Math.random()*arr.length);
        let firstNum = Math.round(Math.random()*100);
        let secondNum = Math.round(Math.random()*100);
        let exp = arr[n]
        let question = firstNum + ' ' + exp + ' '+ secondNum;
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
    return [question, correctAnswer];
};
game(rules, gameFunction)
};
export default brainCalc;