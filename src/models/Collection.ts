import { Events } from './Events';
import { AxiosInstance, AxiosResponse } from 'axios';

export class Collection<T, K> {
  model: T[] = [];
  events: Events = new Events();
  constructor(public api: AxiosInstance, public deserialize: (item: K) => T) {}
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  async fetch(): Promise<K[]> {
    const response: AxiosResponse = await this.api({ method: 'get' });
    response.data.forEach((item: K): void => {
      const user = this.deserialize(item);
      this.model.push(user);
    });
    this.trigger('change');
    return response.data;
  }
}
