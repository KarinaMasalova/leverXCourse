class ElementCreator {
  static createElement(tag, ...classes) {
    const element = document.createElement(tag);
    if (classes) {
      element.classList.add(...classes);
    }
    return element;
  }
}
