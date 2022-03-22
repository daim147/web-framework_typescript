import { User, UserData } from '../models/User';
import { View } from './View';

export class UserShow extends View<User, UserData> {
  template(): string {
    return `
        <div>
        <h1>User Details</h1>
        <h2>User Name: ${this.model.get('name')}</h2>
        <h2>User Age: ${this.model.get('age')}</h2>
        </div>
        `;
  }
}
