'use strict'

function guessNumber() {
  let winNumber = Math.floor(Math.random() * 100) + 1;
  let i = 10;
  
  let start = function() {
    let num = prompt('Угадай число от 1 до 100');

    let checkWin = function(num) {
        i--;
        if (winNumber === Number(num)) {
          let question = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');
          if (question === true) {
            guessNumber();
          } else {
            alert('Игра окончена')
          }
       } else if (i === 0 ) {
          let question = confirm('Попытки закончились, хотите сыграть еще?');
            if (question === true) {
              guessNumber();
            } else {
              alert('Игра окончена')
            }
        } else if (winNumber > Number(num) && num !== null) {
          alert('Загаданное число больше, осталось попыток ' + i);
          start();
        } else if (winNumber < Number(num) && num !== null) {
          alert('Загаданное число меньше, осталось попыток ' + i);
          start();
        }
      };

    let isNumber = function(n){
      if (isNaN(parseFloat(n)) && n !== null ) {
        alert('Введи число');
        start();
      } else if (n === null) {
        alert('Игра окончена');
      } else {     
        checkWin(n);
      }
    };
      
    isNumber(num);
  };
  
  start();
}
guessNumber();