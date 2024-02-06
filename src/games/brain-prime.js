import runGame from '../index.js';
import getRandomNumber from '../helpers.js';

const isPrime = (question) => {
  let result = 0;
  for (let x = 1; x <= question; x += 1) {
    if (question % x === 0) {
      result += 1;
    }
  }
  return result === 2;
};

const playBrainPrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  runGame(rule, getQuestionAndAnswer);
};
export default playBrainPrime;
