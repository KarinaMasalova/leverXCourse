class QuerySelectorComponent {
    constructor(cssSelector) {
        this.element = document.querySelector(cssSelector);
    }
    append(...components) {
        this.element.append(...components.map((c) => c.element));
    }
    addEventListener(type, handler) {
        this.element.addEventListener(type, handler);
    }
}
