import axios from 'axios';
interface UserData {
  name?: string;
  age?: number;
}
type Callback = () => void;
export class User {
  events: { [key: string]: Callback[] } = {};
  constructor(private data: UserData) {}

  get(property: string): string | any {
    return this.data[property];
  }

  set(data: UserData): void {
    Object.assign(this.data, data);
  }

  on(eventName: string, callback: Callback): void {
    this.events[eventName] = [...(this.events[eventName] || []), callback];
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];
    handlers &&
      handlers.forEach((callBack: Callback): void => {
        callBack();
      });
  }

  async save(): Promise<void> {
    const data = await axios.post('http://localhost:3000/users', this.data);
    console.log(data, 'data');
  }
}
