import game from '../index.js';

const brainCalc = () => {
  const rules = 'What is the result of the expression?';
  const gameFunction = () => {
    const arr = ['+', '-', '*'];
    const n = Math.floor(Math.random() * arr.length);
    const firstNum = Math.round(Math.random() * 100);
    const secondNum = Math.round(Math.random() * 100);
    const exp = arr[n];
    const question = `${firstNum} ${exp} ${secondNum}`;
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
  game(rules, gameFunction);
};
export default brainCalc;
