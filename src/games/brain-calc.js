import runGame from '../index.js';
import getRandomNumber from '../helpers.js';

const findCorrectAnswer = (firstNum, exp, secondNum) => {
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
  return correctAnswer;
};

const playBrainCalc = () => {
  const rule = 'What is the result of the expression?';
  const getQuestionAndAnswer = () => {
    const arr = ['+', '-', '*'];
    const n = Math.floor(Math.random() * arr.length);
    const firstNum = getRandomNumber();
    const secondNum = getRandomNumber();
    const exp = arr[n];
    const question = `${firstNum} ${exp} ${secondNum}`;
    const correctAnswer = findCorrectAnswer(firstNum, exp, secondNum);
    return [question, correctAnswer];
  };
  runGame(rule, getQuestionAndAnswer);
};
export default playBrainCalc;
