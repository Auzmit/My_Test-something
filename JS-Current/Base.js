// import  from './Export.js';
import fsp from 'fs/promises';
/* eslint-disable */
// console.log(); //
// // // // // //

export const reverse = (filepath) => fsp.readFile(filepath, 'utf-8')
  .then((data) => data.split('\n').reverse().join('\n'))
  .then((dataReverse) => fsp.writeFile(filepath, dataReverse));

reverse('./test.txt');

// // // // // //
// console.log(); //
// // // // // //
