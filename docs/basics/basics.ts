function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';

// const plus: (n1: number, n2: number) => void = (n1, n2) => n1 + n2;
const plus = (n1: number, n2: number): number => n1 + n2;
const plus1 = plus;
add(number1, number2, printResult, resultPhrase);

interface A {
  age: string;
}
// let obj: { name: string } & A = {
//   name: 'sex',
//   age: 'sex',
//   old: 'number'
// };
interface NameAble {
  name: string;
}
interface AgeAble {
  age: number;
}
type NameAndAgeAble = NameAble & AgeAble;
// interface NameAndAgeAble extends NameAble, AgeAble {}

let str: NameAndAgeAble = { name: 'his', age: 23 };

// function none(a: NameAndAgeAble) {
function none(a: NameAble | AgeAble) {
  if ('name' in a) {
    console.log(a.name);
    console.log(a['name']);
  }
  //
  'name' in a && console.log(a.name);
  //
  if ('age' in a) {
    console.log(a.age);
  }
}

none({ name: 'hus', age: 23 });
