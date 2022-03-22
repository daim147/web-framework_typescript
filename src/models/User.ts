import { users } from '../axios';
import { Events } from './Events';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
import { Model } from './Model';
import { Collection } from './Collection';
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
  static buildCollection() {
    //! Type inference work quite well in both function return also
    // return new Collection<UserData, User>(users, User.build);
    return new Collection(users, User.build);
  }
  getRandomAge = (): void => {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  };
}
