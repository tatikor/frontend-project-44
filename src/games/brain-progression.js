import runGame from '../index.js';
import getRandomNumber from '../helpers.js';

const makeArray = (firstNum, arrlength, step) => {
  const array = [firstNum];
  for (let i = 0; i <= arrlength; i += 1) {
    const nextNum = array[i] + step;
    array.push(nextNum);
  }
  return array;
};
const playBrainProgression = () => {
  const rule = 'What number is missing in the progression?';
  const getQuestionAndAnswer = () => {
    const firstNum = getRandomNumber(1, 100);
    const arrlength = getRandomNumber(5, 10);
    const step = getRandomNumber(5,15);
    const question = makeArray(firstNum, arrlength, step);
    const randomIndex = getRandomNumber(1, question.length);
    const x = question[randomIndex];
    question[randomIndex] = '..';
    const correctAnswer = String(x);
    return [question.join(' '), correctAnswer];
  };
  runGame(rule, getQuestionAndAnswer);
};
export default playBrainProgression;
