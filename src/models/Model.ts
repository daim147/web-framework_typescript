interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
interface Sync<T> {
  fetch(id: number): Promise<T>;
  save(info: T): Promise<T>;
}
interface ModelAttributes<T> {
  getAll(): T;
  set(data: T): void;
  get<K extends keyof T>(key: K): T[K];
}
interface HasId {
  id?: number;
}
export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
  get get() {
    return this.attributes.get;
  }
  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }
  set(update: T): void {
    this.attributes.set(update);
    this.trigger('change');
  }
  async fetch(): Promise<T> {
    const id = this.get('id');
    if (!id) {
      throw new Error('Cannot Fetch without user id');
    }
    const data = await this.sync.fetch(id);
    this.set(data);

    return data;
  }

  async save(): Promise<T> {
    try {
      const userData = this.attributes.getAll();
      const data = await this.sync.save(userData);
      this.trigger('save');
      return data;
    } catch (e) {
      this.trigger('error');
    }
  }
}
