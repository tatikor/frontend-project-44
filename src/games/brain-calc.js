import runGame from '../index.js';
import getRandomNumber from '../helpers.js';

const findCorrectAnswer = (firstNum, exp, secondNum) => {
  switch (exp) {
    case '+':
      return String(firstNum + secondNum);
    case '-':
      return String(firstNum - secondNum);
    case '*':
      return String(firstNum * secondNum);
    default:
      throw new Error(`Error : ${exp}!`);
  }
};

const playBrainCalc = () => {
  const rule = 'What is the result of the expression?';
  const getQuestionAndAnswer = () => {
    const arr = ['+', '-', '*'];
    const n = getRandomNumber(0, 2);
    const firstNum = getRandomNumber(1, 100);
    const secondNum = getRandomNumber(1, 100);
    const exp = arr[n];
    const question = `${firstNum} ${exp} ${secondNum}`;
    const correctAnswer = findCorrectAnswer(firstNum, exp, secondNum);
    return [question, correctAnswer];
  };
  runGame(rule, getQuestionAndAnswer);
};
export default playBrainCalc;
