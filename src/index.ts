import { User } from './models/User';
const user = User.build({ id: 1 });

user.on('change', () => {
  console.log('User was change');
});

user.set({ age: 342 });
user.fetch();
