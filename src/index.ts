import { User } from './models/User';
const user = new User({ name: 'Husnain', age: 23 });

// console.log(user.get('name'));

user.on('Click', () => console.log('TRIGGERS'));
user.on('Click', () => console.log('TRIGGERS'));
user.on('Click', () => console.log(user.events));
console.log(user);
user.trigger('Click');
