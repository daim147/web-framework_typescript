import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
  abstract template(): string;

  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }
  regionsMap(): { [key: string]: string } {
    return {};
  }
  eventMaps(): { [key: string]: (event: Event) => void } {
    return {};
  }
  bindModel = (): void => {
    this.model.on('change', () => {
      this.render();
      console.log(this.parent);
    });
  };
  bindEvents(fragment: DocumentFragment): void {
    const events = this.eventMaps();
    for (let event in events) {
      const [eventName, eventTarget] = event
        .split(':')
        .map((str) => str.trim());
      fragment.querySelectorAll(eventTarget).forEach((element): void => {
        element.addEventListener(eventName, events[event]);
      });
    }
  }
  mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();
    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }
  onRender(): void {}
  render = (): void => {
    console.log(this.parent);
    this.parent.innerHTML = '';
    const template = document.createElement('template');
    template.innerHTML = this.template();
    this.bindEvents(template.content);
    this.mapRegions(template.content);
    this.onRender();
    this.parent.appendChild(template.content);
  };
}
