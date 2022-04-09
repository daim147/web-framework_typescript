//! PUBLIC: available everywhere (default)
//! PROTECTED: available everywhere inside class and also in child class
//! Private: available only inside class

//! MODIFIERS CAN NOT BE CHANGE IN CHILD CLASS
//! can change only protected in parent can be change to public in child

class Vehicles {
  protected name: string = 'red';
  //   size: string;
  constructor(public size: string) {} //  to below constructor

  //   constructor(size: string) {
  //     this.size = size;
  //   }
  protected drive(): void {
    console.log('BABABABABABA');
  }

  private honk(): void {
    console.log('PA PA PA PA');
  }

  public race(): void {
    console.log('HEHEHEHE');
  }
}

const vehicle = new Vehicles('red');

class Bike extends Vehicles {
  public name = 'green';

  public drive(): void {
    console.log('BA BA BA BA ');
  }
}

const bike = new Bike('red');
bike.drive();
bike.race();
// bike.honk();
