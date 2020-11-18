import QuerySelectorElement from './QuerySelectorElement';

export default class CardsArea extends QuerySelectorElement {
    constructor() {
        super('.cards-area');
    }
    removeChild(component) {
        this.element.removeChild(component.element);
    }
}
