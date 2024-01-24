import playingGame from '../index.js';
import getRandomNumber from '../more_functions.js';

const nod = (A) => {
  const n = A.length;
  let x = Math.abs(A[0]);
  for (let i = 1; i < n; i += 1) {
    let y = Math.abs(A[i]);
    while (x && y) {
      if (x > y) {
        x %= y;
      } else {
        y %= x;
      }
    }
    x += y;
  }
  return x;
};
const playBrainGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const getQuestionAndAnswer = () => {
    const randomNumber1 = getRandomNumber();
    const randomNumber2 = getRandomNumber();
    const question = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = String(nod([randomNumber1, randomNumber2]));
    return [question, correctAnswer];
  };
  playGame(rule, getQuestionAndAnswer);
};
export default playBrainGcd;
