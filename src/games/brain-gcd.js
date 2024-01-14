import game from '../index.js';

const NOD = (A) => {
  let n = A.length, x = Math.abs(A[0]);
  for (let i = 1; i < n; i++) { 
  let y = Math.abs(A[i]);
    while (x && y) { 
      x > y ? x %= y : y %= x; 
    }
    x += y;
  }
  return x;
};
const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const gameFunction = () => {
    let randomNumber1 = Math.round(Math.random() * 100);
    let randomNumber2 = Math.round(Math.random() * 100);
    const question = randomNumber1 + ' ' + randomNumber2;
    let correctAnswer = String(NOD([randomNumber1, randomNumber2]));
    return [question, correctAnswer];
  };
  game(rules, gameFunction);
};
export default brainGcd;
