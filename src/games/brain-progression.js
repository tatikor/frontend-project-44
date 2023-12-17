//импорт библиотек
import game from '../index.js';
//логика - сами функции
const makingArray = () => { 
    let firstNum = Math.round(Math.random()*100);
    let arrlength = Math.ceil(Math.random()*5 +5);
    let step = Math.ceil(Math.random()*5 +5);
    let array = [firstNum];  
    for (let i=0; i<=arrlength; i++) {
        let nextNum = array[i] + step;
        array.push(nextNum);
     }
    return array;
}
const brainProgression = () => {
    const rules = 'What number is missing in the progression?';
    const gameFunction = () => {
    let question = makingArray();
    let randomIndex = Math.floor(Math.random() * (question.length));
    let x = question[randomIndex];
    question[randomIndex] = '..';
    let correctAnswer = String(x);
    return [question, correctAnswer];
    };
    game(rules, gameFunction)
    };
export default brainProgression;

    


