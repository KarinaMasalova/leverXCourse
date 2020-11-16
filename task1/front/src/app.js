let allCards;
let isGrid = true;
let clickAmount = 0;

const main = new MainContainer();
const gridCardTemplate = new GridCardTemplate();
const tableHeadTemplate = new TableHeadTemplate();
const tableCardTemplate = new TableCardTemplate();
const fullInfoCardTemplate = new FullInfoCardTemplate();
const fullInfoCardForUserTemplate = new FullInfoCardForUserTemplate();
const cardsArea = new CardsArea();
const gridCards = new GridCards();
const tableCards = new TableCards(cardsArea);
const employeesAmountText = new EmployeesAmountText();
const tableViewButton = new TableViewButton();
const gridViewButton = new GridViewButton();
const searchContainer = new SearchContainer();
const statusManager = new StatusManager();

fetchAllEmployees()
    .then(data => {
        allCards = data.cards; /* get data from json */
        let cardComponents = allCards.map(createGridCards);
        employeesAmountText.displayEmployeesAmount(cardComponents);
    })
    .catch(err => console.log(err));

/* creating cards from templates */

const createCards = (template, cards, container) => {
    container.element.innerHTML = mapCards(template, cards);
    cardsArea.element.append(container.element);
};

const createGridCards = () => {
    createCards(gridCardTemplate, allCards, gridCards);
};

const createTableCards = () => {
    createCards(tableCardTemplate, allCards, tableCards);
};

const createFullCardLayoutFromTemplate = (obj) => {
    main.element.innerHTML = mapFullInfoCard(fullInfoCardTemplate, obj);
};

const createFullCardLayoutForUserFromTemplate = (obj) => {
    main.element.innerHTML = mapFullInfoCard(fullInfoCardForUserTemplate, obj);
};

/* find employee obj in cards by id */

function getObjWithFullInfoAboutEmployee(id) {
    const card = allCards.filter((card) => card.id == id)[0];
    fetchOneEmployee(card.id)
        .then(data => {
            if(statusManager.status !== 'user') {
                createFullCardLayoutFromTemplate(data);
            } else {
                createFullCardLayoutForUserFromTemplate(data);
            }
        })
        .catch(err => console.log(err));
    return card;
};

/* sorting */

const sortCardsByClick = (cards) => {
    clickAmount += 1;
    if (clickAmount % 3 === 1) {
        tableCards.tableBody.innerHTML = createCards(tableCardTemplate, cards.sort(ascSortCards), tableCards);
        tableCards.appendTableHead(tableHeadTemplate);
    } else if (clickAmount % 3 === 2) {
        tableCards.tableBody.innerHTML = createCards(tableCardTemplate, cards.sort(descSortCards), tableCards);
        tableCards.appendTableHead(tableHeadTemplate);
    } else {
        tableCards.tableBody.innerHTML = createCards(tableCardTemplate, cards, tableCards);
        tableCards.appendTableHead(tableHeadTemplate);
    }
};

function onTableHeadClick() {
    let cardsInOrderAsInObj = [];
    allCards.forEach((card) => {
        cardsInOrderAsInObj.push(card);
    });
    sortCardsByClick(cardsInOrderAsInObj);
}

window.addEventListener('load', () => {
    searchContainer.addEventListener('submit', (event) => {
        event.preventDefault();
        fetchFilteredEmployees()
            .then(data => {
                if (isGrid) {
                    createCards(gridCardTemplate, data, gridCards);
                    employeesAmountText.displayEmployeesAmount(data);
                } else {
                    createCards(tableCardTemplate, data, tableCards);
                    tableCards.appendTableHead(tableHeadTemplate);
                    employeesAmountText.displayEmployeesAmount(data);
                }
            })
        .catch(err => console.log(err));
    });
    tableViewButton.addEventListener('click', () => {
        isGrid = false;
        cardsArea.removeChild(gridCards);
        tableCards.tableBody.append(allCards.map(createTableCards));
        tableCards.appendTableHead(tableHeadTemplate);
        gridViewButton.element.style.backgroundImage = "url('./assets/img/icons/grid-view-inactive.png')";
        tableViewButton.element.style.backgroundImage = "url('./assets/img/icons/line-view-active.png')";
    });
    gridViewButton.addEventListener('click', () => {
        isGrid = true;
        const cardComponents = allCards.map(createGridCards);
        cardsArea.removeChild(tableCards);
        tableViewButton.element.style.backgroundImage = "url('./assets/img/icons/line-view-inactive.png')";
        gridViewButton.element.style.backgroundImage = "url('./assets/img/icons/grid-view-active.png')";
    });
    statusManager.logIn();
    if(statusManager.status !== 'admin') {
        const navigationSettings = document.getElementById('navigation__settings');
        navigationSettings.style.display = 'none';
    }
});
