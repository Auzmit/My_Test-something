/* eslint-disable */
console.log(); //
// // // // // //

let data = 'ad\ndsfg';
console.log(data);
data = data.split('\n')
let i = data.length - 1;
let j = 0;
data = data.map((line) => {
  data[j] = line;
  i--;
  j++;
});

console.log(data);

// // // // // //
console.log(); //
// // // // // //
