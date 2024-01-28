import runGame from '../index.js';
import getRandomNumber from '../helpers.js';

const checkIfPrime = (question) => {
  let correctAnswer = '';
  let result = 0;
  for (let x = 1; x <= question; x += 1) {
    if (question % x === 0) {
      result += 1;
    }
  }
  if (result === 2) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const playBrainPrime = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber();
    const correctAnswer = checkIfPrime(question);
    return [question, correctAnswer];
  };
  runGame(rule, getQuestionAndAnswer);
};
export default playBrainPrime;
