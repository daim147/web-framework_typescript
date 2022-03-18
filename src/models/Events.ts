type Callback = () => void;

export class Events {
  events: { [key: string]: Callback[] } = {};
  on = (eventName: string, callback: Callback): void => {
    this.events[eventName] = [...(this.events[eventName] || []), callback];
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];
    handlers &&
      handlers.forEach((callBack: Callback): void => {
        callBack();
      });
  };
}
