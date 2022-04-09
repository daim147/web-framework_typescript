//! type annotation can completely be ignore because variable declaration and assignment is on same line

// const age: number = 24;
const sex: string = 'Male';
const adult: boolean = true;

const hasNothing: null = null;
const hasDone: undefined = undefined;

//Built in objects
const date: Date = new Date();

// Arrays
const stringArray: string[] = ['red', 'green', 'yellow', '' + 50];
const numberArray: number[] = [23, 343, 5354, NaN];
const booleanArray: boolean[] = [true, false, !0];

// Objects
interface co {
  x: number;
  y: number;
  z?: number;
}
// const coordinates :  {x: number; y: number, z?:number  } = {
const coordinates: co = {
  y: 24,
  x: 23,
  z: 23,
};

// classes

class Car {}
const car: Car = new Car();

// Function
const doSomething = (i: number): number => {
  return i;
};
const doSomethings: (b: number) => void = (i: number): number => {
  return i;
};
console.log(doSomething(90));

// !When to use annotation (where type inference does not work)
//? 1) When function return any type
const json = '{"x": 23, "y": 53}';
const cords: { x: number; y: number } = JSON.parse(json); //its return any type because can guess

//? 2) When we declare variable in one line and assign it later
const arr = ['hello', 'hy']; // it will be as string[] by (type inference)
let fount = false;
// let fount: boolean

arr.forEach((a) => {
  console.log(a, fount);
  fount = a === 'hello' ? true : fount;
});
// console.log(fount) //its is giving error when type boolean but didn't know why

//?  3) When type of variable cannot inferred correctly
let numberArr = [-12, 314, 423, -23]; // it will be as number[] by (type inference)
let numberAboveZero: boolean | number = false;

numberArr.forEach((a) => {
  a >= 0 && (numberAboveZero = a);
});
console.log(numberAboveZero);
