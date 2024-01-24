import playingGame from '../index.js';
import getRandomNumber from '../more_functions.js';

const getShortNumber = () => {
  const minNum = 5;
  const shortNumber = Math.floor(Math.random() * minNum + minNum);
  return shortNumber;
};
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
    const firstNum = getRandomNumber();
    const arrlength = getShortNumber();
    const step = getShortNumber();
    const question = makeArray(firstNum, arrlength, step);
    const randomIndex = Math.floor(Math.random() * (question.length));
    const x = question[randomIndex];
    question[randomIndex] = '..';
    const correctAnswer = String(x);
    return [question.join(' '), correctAnswer];
  };
  playingGame(rule, getQuestionAndAnswer);
};
export default playBrainProgression;
