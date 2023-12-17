//импорт библиотек
import game from '../index.js';
//логика - сами функции
const brainPrime = () => {
    const rules = 'Answer "yes" if the number is prime. Otherwise answer "no".';
    const gameFunction = () => {
        let question = Math.round(Math.random()*100);
        let correctAnswer = '';
        let result = 0;
        for (let x=1; x<=question; x++) {
            if (question%x === 0) {
         result +=1;
    }
        }
        if (result === 2) {
            correctAnswer = 'yes';
        } else {
            correctAnswer = 'no';
        }
        return [question, correctAnswer];  
};
game(rules, gameFunction)
};
export default brainPrime;
    


