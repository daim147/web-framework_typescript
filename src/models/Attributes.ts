import { UserData } from './User';

export class Attributes<T> {
  constructor(public data: T) {}
  // keyof tells that it argument should belongs to UserData
  get = <K extends keyof T>(property: K): T[K] => {
    const data = this.data[property];
    //  ! const data = this.data[property as keyof typeof this.data]
    //!   const data = this.data[property as keyof T]
    return data;
  };

  set = (data: T): void => {
    Object.assign(this.data, data);
  };

  getAll(): T {
    return this.data;
  }
}
//! if no generic is passes whatever the argument will pass typescript will make type from it
// const att = new Attributes({ name: 'husnain', age: 23 });
const att = new Attributes<UserData>({ name: 'husnain', age: 23 });

// const age = att.get<'age'>('age');
const age = att.get('age');
