const arrayOffcuts = ['apple', 'mango', 'banana'];

const nestedArray: string[][] = [];
// const nestedArray: (string[] | object)[] = [];
// const nestedArray: (string[] | { a: number })[] = [];

nestedArray.push(['hello']);
// nestedArray.push(new String('hello'));
// nestedArray.push('hello');
// nestedArray.push({ a: 2 });

// nestedArray.push('hello'); //will give error

const [first] = arrayOffcuts; //type script know because it is string[]

arrayOffcuts.map((a: string): string => {
  return a;
});
