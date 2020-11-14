class EmployeesAmountText extends QuerySelectorComponent {
    constructor() {
        super('.cards-number');
    }
    displayEmployeesAmountText(cardsAmount, text) {
        return this.element.textContent = cardsAmount + ' ' + text;
    };
    displayEmployeesAmount(arr) {
        const amount = arr.length;
        if (arr.length > 1) {
            this.displayEmployeesAmountText(amount, 'employees displayed');
        } else {
            this.displayEmployeesAmountText(amount, 'employee displayed');
        }
    };
}
