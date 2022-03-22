import { User } from './models/User';
import { UserEdit } from './view/UserEdit';
const user = User.build({ name: 'Mohsin', age: 23 });
const root = document.getElementById('root');
if (root) {
  const userForm = new UserEdit(root, user);
  userForm.render();
}
