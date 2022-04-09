const today = new Date();

const person = {
  age: 24,
};
person.age;

class Color {
  name: string = 'Hell0';
  constructor(name?: string) {
    name && (this.name = name);
  }
}
const red = new Color('red');
const green = new Color();
console.log(red.name);
console.log(green.name);

const added: (a: number) => void = () => {};

// added();
added(2);
enum Genders {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHERS = 'OTHERS',
}
type GendersSmall = 'male' | 'female' | 'female' | 'others';
interface obj {
  height: number;
  sex: Genders; //! when enum is used variable need to satisfy one of the enum property
  //! sex: 'male' | 'female' | 'others'; // type literal
  //! sex: GendersSmall;
  //! [key: number | string]: string | number;
}
const arr: Array<number> = [2];
const arr2: number[] = [2];
// ! when union type is used variable should satisfy one of the type annotation
let adsk: { age: number; name: string } | obj = {
  name: 'Hussein',
  age: 23,
  height: 190,
  sex: Genders.MALE,
  // sex: 'female',
};

//!if enum number it will increment
//! enum Role {a, b, c} // a = 0, b=1, c=2
//! enum Role {a=6, b=1, c} // b=1, c=2
enum Role {
  ADMIN = 'ADMIN',
  PATIENT = 'PATIENT',
}
const combine = ((a: string | number, b: string | number) => {
  let result: string | number;
  if (typeof a === 'number' && typeof b === 'number') {
    result = a + b;
  } else {
    console.log(a.toString(), b.toString());
  }
  return result;
})('32', 43);
