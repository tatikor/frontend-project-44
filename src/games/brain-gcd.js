import runGame from '../index.js';
import getRandomNumber from '../helpers.js';

const findGcd = (num1, num2) => {
  const arr = [];
  let count = 0;
  arr.push(count);
  const maxNum = Math.max(num1, num2);
  while (count <= maxNum) {
    if ((num1 % count === 0) && (num2 % count === 0)) {
      arr.push(count);
    }
    count += 1;
  }
  const result = arr[arr.length - 1];
  return result;
};

const playBrainGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const getQuestionAndAnswer = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const question = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = String(findGcd(randomNumber1, randomNumber2));
    return [question, correctAnswer];
  };
  runGame(rule, getQuestionAndAnswer);
};
export default playBrainGcd;
