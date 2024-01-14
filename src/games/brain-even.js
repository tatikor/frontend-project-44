import game from '../index.js';

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameFunction = () => {
    let question = Math.round(Math.random() * 100);
    let correctAnswer = '';
    if (question % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    return [question, correctAnswer];
  };
  game(rules, gameFunction);
};
export default brainEven;
