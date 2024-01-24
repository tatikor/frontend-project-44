import playGame from '../index.js';
import getRandomNumber from '../more_functions.js';

const checkIfEven = (question) => {
  let correctAnswer = '';
  if (question % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const playBrainEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber();
    const correctAnswer = checkIfEven(question);
    return [question, correctAnswer];
  };
  playGame(rule, getQuestionAndAnswer);
};
export default playBrainEven;
