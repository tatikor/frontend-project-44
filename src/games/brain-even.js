import runGame from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (question) => { 
  return question % 2 === 0 ? true : false;
}

const playBrainEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const getQuestionAndAnswer = () => {
    const question = getRandomNumber(1, 100);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  runGame(rule, getQuestionAndAnswer);
};
export default playBrainEven;
