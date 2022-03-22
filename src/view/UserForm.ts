import { User, UserData } from '../models/User';
import { View } from './View';
type value = string;
export class UserForm extends View<User, UserData> {
  eventMaps(): { [key: string]: (event: Event) => void } {
    return {
      'click:.randomAge': this.model.getRandomAge,
      'click:.setName': this.onSetName,
    };
  }
  onSetName = () => {
    const input = this.parent.querySelector(
      '.setNameInput'
    ) as HTMLInputElement;
    this.model.set({ name: input.value });
  };

  buttonClick(e: Event): void {
    console.log(e);
  }
  inputChange(e: Event): void {
    console.log(e);
  }
  template(): string {
    return `
        <div>
        <h1>User Form</h1>

        <input class = 'setNameInput' placeholder = '${this.model.get(
          'name'
        )}' />
        <button class = 'setName'>Set Name</button>
        <button class = 'randomAge'>Random Age</button>
        </div>
        `;
  }
}
