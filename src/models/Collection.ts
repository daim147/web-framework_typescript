import { Events } from './Events';
import { AxiosInstance, AxiosResponse } from 'axios';

export class Collection<T, K> {
  model: K[] = [];
  events: Events = new Events();
  constructor(public api: AxiosInstance, public build: (item: T) => K) {}
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  async fetch(): Promise<T[]> {
    const response: AxiosResponse = await this.api({ method: 'get' });
    response.data.forEach((item: T): void => {
      const user = this.build(item);
      this.model.push(user);
    });
    this.trigger('change');
    return response.data;
  }
}
