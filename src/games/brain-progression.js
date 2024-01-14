import game from '../index.js';

const makingArray = () => {
  const firstNum = Math.round(Math.random() * 100);
  const arrlength = Math.ceil(Math.random() * 5 + 5);
  const step = Math.ceil(Math.random() * 5 + 5);
  const array = [firstNum];
  for (let i = 0; i <= arrlength; i+=1) {
    const nextNum = array[i] + step;
    array.push(nextNum);
  }
  return array;
};
const brainProgression = () => {
  const rules = 'What number is missing in the progression?';
  const gameFunction = () => {
    const question = makingArray();
    const randomIndex = Math.floor(Math.random() * (question.length));
    const x = question[randomIndex];
    question[randomIndex] = '..';
    const correctAnswer = String(x);
    return [question.join(' '), correctAnswer];
  };
  game(rules, gameFunction);
};
export default brainProgression;
