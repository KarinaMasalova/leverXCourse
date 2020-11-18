import ElementCreator from './ElementCreator';

export default class Component {
  constructor(tag, ...classes) {
    this.element = ElementCreator.createElement(tag, ...classes);
  }
  append(...components) {
    this.element.append(...components.map((c) => c.element));
  }
}
