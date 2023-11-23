/* eslint-disable */
console.log();
// Именование зарегистрированных переменных
console.log('Именование зарегистрированных переменных:');
function sum(a, b) {
  console.log({ b });
  return a + b;
}

sum(1, 2);
sum(4, 5);
console.log();
console.log();



// Регистрация больших объектов в консоли Node
console.log('Регистрация больших объектов в консоли Node:');
const myObjectFull = {
  propA: {
    propB: {
      propC: {
        propD: 'hello'
      }
    }
  }
};
 
console.log(JSON.stringify(myObjectFull, null, 2));
console.log();
console.log(myObjectFull);
console.log();
console.log();



// Расширенное форматирование
console.log('Расширенное форматирование:');
const user = 'john_smith';
const attempts = 5;

// %s — Элемент преобразуется в строку
// %d или же %i — Элемент преобразуется в целое число
// %f — Элемент преобразуется в число с плавающей запятой
// %o — Элемент отображается с оптимально полезным форматированием
// %O — Элемент отображается с общим форматированием объекта JavaScript
// %c — Применяет предоставленный CSS

console.log('%s failed to login %d times', user, attempts);
// logs "john_smith failed to login 5 times"

const myObjectString = {
  name: 'John Smith',
  profession: 'agent'
};

console.log('Neo, be aware of %o', myObjectString);



// При логировании списков элементов пользуйтесь console.table()
console.log('При логировании списков элементов пользуйтесь console.table():');
const problems = [
  {id: 1, name: 'asdf', difficulty: 'easy'},
  {id: 2, name: 'oppph', difficulty: 'medium'},
  {id: 3, name: 'df', difficulty: 'easy'},
]
console.table(problems);
console.error(problems);
// ┌─────────┬────┬─────────┬────────────┐
// │ (index) │ id │  name   │ difficulty │
// ├─────────┼────┼─────────┼────────────┤
// │    0    │ 1  │ 'asdf'  │   'easy'   │
// │    1    │ 2  │ 'oppph' │  'medium'  │
// │    2    │ 3  │  'df'   │   'easy'   │
// └─────────┴────┴─────────┴────────────┘



console.log();
