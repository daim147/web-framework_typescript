//! interface are use dto make code reuseable and more generic

//! function mostly use interface so that which class / object need to access that function need to meet the condition of interface

//! class / object just need to contain all the property which in needed in interface in order to implement it

//! Dont use any type because it typescript losses ability to check types and losses ability of TYPE INFERENCE

interface Speakable {
  speak(word: string): void;
}

const human = {
  name: 'Husnain',
  sex: 'male',
  age: 24,
  speak(word: string): void {
    console.log(word);
  },
};
const animal = {
  name: 'Chocho',
  sex: 'male',
  age: 1,
  speak(word: any): string {
    return word;
  },
};

const speakWord = (item: Speakable, word: string): void => {
  item.speak(word);
};
speakWord(human, 'Hello');
