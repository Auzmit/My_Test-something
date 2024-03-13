// import  from './Export.js';
// import path from 'path';
// import _ from 'lodash';
// import fsp from 'fs/promises';
/* eslint-disable */
// console.log(); //
// // // // // //

import constArrWords from './Export.js';
// let arrWords = constArrWords;

const arrRightPlace = ['', '', '', '', ''];
const inputs = document.querySelectorAll('.input_right-letter');

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    const number = e.target.id.slice(-1);
    const value = e.target.value.toLowerCase();
    arrRightPlace[number - 1] = value;
    console.log('number:', `'${number}'`);
    console.log('value:', `'${value}'`);
    console.log('arrRightPlace:', arrRightPlace);
  
    let resultWords = Array.from(constArrWords);
  
    for (let iResultWords = 0; iResultWords < resultWords.length; iResultWords += 1) {
      for (let j = 0; j < 4; j += 1) {
        if (resultWords[iResultWords] !== null) {
          if (resultWords[iResultWords][j] !== arrRightPlace[j]
              && arrRightPlace[j] !== '') {
            resultWords[iResultWords] = null;
          }
        }
      }
    }
    // resultWords = resultWords.filter((item) => item !== null);
  
    console.log('const =', constArrWords);
    console.log('arrrr =', resultWords);
    console.log('--------------------------------------------------------------------');
  })
})

// // // // // //
// console.log(); //
// // // // // //
