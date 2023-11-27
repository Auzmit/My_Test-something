/* eslint-disable */
import fs from 'fs';
// console.log(); //
// // // // // //

fs.readFile('./test.txt', 'utf8', function(err, data) {
  if (err) {
    console.log('ERROR!');
  } else {
    console.log();
    console.log(data.toString().split('\r\n'));
    console.log();
  }
})

// // // // // //
// console.log(); //
// // // // // //
