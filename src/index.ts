import { User } from './models/User';
console.log('Hello');
const user = new User({ name: 'Husnain', age: 20 });

console.log(user.get('age'));
user.on('change', () => {
  console.log('change 1');
});
user.on('change', () => {
  console.log('change 2');
});
user.on('delete', () => {
  console.log('delete 1');
});

user.trigger('change');

console.log(user.save());
