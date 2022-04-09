// const variable-name : variableType (argument-name : argument-type) => return type = (argument: argument-type) : return type => {}

//! type inference doesn't work for argument but work for return of function but we should always specify return type

const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}
//! void for returning undefined or null
const log = (message: string): void => console.log(message);

//! never use when function will be cancel its execution without reaching return
const throwError = (message: string): never => {
  //   if (!message) throw new Error(message);
  throw new Error(message);
};

const todaysWeather = {
  date: new Date(),
  weather: 'Sunny',
};
// const logWeather = (forecasts: { date: Date; weather: string }): void => {
//   console.log(forecasts.date);
//   console.log(forecasts.weather);
// };
const logWeather = ({ date }: { date: Date; weather: string }): void => {
  console.log(date);
  // console.log(forecasts.weather);
};
// interface p {
//   fullname: string;
//   age: number;
//   cord: {
//     lat: number;
//     long: number;
//   };
// }
// const pupil: p = {
const pupil = {
  fullname: 'Daim',
  age: 24,
  cord: {
    lat: 13,
    long: 42,
  },
};
// const { age, fullname } = pupil;
// const { age, fullname }: p = pupil;
let {
  age,
  fullname,
  cord: { lat, long },
}: {
  age: number;
  fullname: string;
  cord: {
    lat: number;
    long: number;
  };
} = pupil;
// age = '323';
