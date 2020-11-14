class TableCards extends Component {
    constructor(cardsArea) {
        super('table', 'cards-table');
        this.element.setAttribute('cellpadding', '15%');
        this.tableHead = new TableHead();
        this.tableBody = new TableBody();
        this.cardsArea = cardsArea;
    }
    appendTableHead = (tableHeadTemplate) => {
        this.tableHead.element.innerHTML = tableHeadTemplate.element;
        this.element.append(this.tableHead.element);
        this.cardsArea.element.append(this.element);
    }    
}
