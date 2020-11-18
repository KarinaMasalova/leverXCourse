export default class GetElemByIdElement {
    constructor(id) {
        this.element = document.getElementById(id).textContent;
    }
}
