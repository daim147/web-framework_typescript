import { users } from '../axios';
import { Events } from './Events';
import { Sync } from './Sync';
import { Attributes } from './Attributes';
export interface UserData {
  name?: string;
  age?: number;
  id?: number;
}
export class User {
  events: Events = new Events();
  sync: Sync<UserData> = new Sync<UserData>(users);
  attributes: Attributes<UserData>;
  constructor(attrs: UserData) {
    this.attributes = new Attributes<UserData>(attrs);
    //! if we do like this we have to specify all the type up there
    // this.get = this.attributes.get.bind(this.attributes);
    // this.on = this.events.on.bind(this.events);
  }

  get get() {
    return this.attributes.get;
  }
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
}
