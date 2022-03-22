import { users } from '../axios';
import { Events } from './Events';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { Model } from './Model';
export interface UserData {
  name?: string;
  age?: number;
  id?: number;
}
export class User extends Model<UserData> {
  static build(attr: UserData): User {
    return new User(
      new Attributes<typeof attr>(attr),
      new Events(),
      new Sync<typeof attr>(users)
    );
  }
}
