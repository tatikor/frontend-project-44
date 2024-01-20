import game from '../index.js';

const NOD = (A) => {
  const n = A.length;
  let x = Math.abs(A[0]);
  for (let i = 1; i < n; i += 1) {
    let y = Math.abs(A[i]);
    while (x && y) {
      if (x > y) {
        x %= y;
      }
      else {
        y %= x;
      }
    }
    x += y;
  }
  return x;
};
const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const gameFunction = () => {
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);
    const question = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = String(NOD([randomNumber1, randomNumber2]));
    return [question, correctAnswer];
  };
  game(rules, gameFunction);
};
export default brainGcd;
