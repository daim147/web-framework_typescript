import { users } from '../axios';
import { Events } from './Events';
import { Sync } from './Sync';
export interface UserData {
  name?: string;
  age?: number;
  id?: number;
}
export class User {
  events = new Events();
  sync = new Sync(users);
}
