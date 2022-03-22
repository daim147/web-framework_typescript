import { User } from './models/User';
import { Collection } from './models/Collection';
import { users } from './axios';
const user = User.build({ name: 'husnain' });
const collection = new Collection(users, User.build);
collection.fetch().then((data) => console.log(data));

// user.save();
// user.on('change', () => {
//   console.log('User was change');
// });

// user.set({ age: 342 });
// user.fetch();
