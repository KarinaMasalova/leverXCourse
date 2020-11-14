class CardsArea extends QuerySelectorComponent {
    constructor() {
        super('.cards-area');
    }
    removeChild(component) {
        this.element.removeChild(component.element);
    }
}
