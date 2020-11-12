let allCards;
let isGrid = true;
let clickAmount = 0;

const cardsArea = document.querySelector('.cards-area');
const searchContainer = document.querySelector('.search__container');
const tableViewButton = document.querySelector('.ico__table-view');
const gridViewButton = document.querySelector('.ico__grid-view');
const cardsNumber = document.querySelector('.cards-number');
const main = document.querySelector('main');

const gridCards = createElement('div', 'cards');
const tableCards = createElement('table', 'cards-table');
tableCards.setAttribute('cellpadding', '15%');
const tableHead = document.createElement('thead', 'thead');
const tableBody = createElement('tbody');

const allEmployeesRequestURL = 'http://localhost:5000';
const oneEmployeeRequestByIdURL = (id) => `http://localhost:5000/${id}`;
const filteredEmployeesRequestURL = (inputValue) => `http://localhost:5000/filter?inputValue=${inputValue}`;

let tableHeadTemplate;
let gridCardTemplate;
let tableCardTemplate;
let fullInfoCardTemplate;

/* helper for creating elements */
function createElement(tag, ...classes) {
    const element = document.createElement(tag);
    if (classes) {
        element.classList.add(...classes);
    }
    return element;
}

/* mapping */

const mapCards = (cardTemplate, cards) => {
    return cards
        .map((card) => 
            cardTemplate
                .replace('$id', card.id)
                .replace('$img', card.photo)
                .replace('$name', card.engName)
                .replace('$nativeName', card.ruName)
                .replace('$department', card.department)
                .replace('$room', card.room)
        )
        .join('');
};

const mapFullInfoCard = (template, card) => {
    return template
        .replace('$id', card.id)
        .replace('$ID', card.id)
        .replace('$sex', card.sex)
        .replace('$img', card.photo)
        .replace('$name', card.engName)
        .replace('$nativeName', card.ruName)
        .replace('$department', card.department)
        .replace('$room', card.room)
        .replace('$internalPhone', card.internalPhone)
        .replace('$mobilePhone', card.mobilePhone)
        .replace('$email', card.email)
        .replace('$skypeID', card.skypeID)
        .replace('$cNumber', card.cNumber)
        .replace('$hireDate', card.hireDate)
        .replace('$status', card.status)
        .replace('$startPeriod', card.startOfEmploymentPeriod)
        .replace('$workingDayDuration', card.workingDayDuration)
        .replace('$vacation', card.vacation)
        .replace('$businessCard', card.businessCard);
};

/* creating cards from templates */

const createCards = (template, cards, container) => {
    container.innerHTML = mapCards(template, cards);
    cardsArea.append(container);
};

const createGridCards = () => {
    createCards(gridCardTemplate, allCards, gridCards);
};

const createTableCards = () => {
    createCards(tableCardTemplate, allCards, tableCards);
};

const createFullCardLayoutFromTemplate = (obj) => {
    main.innerHTML = mapFullInfoCard(fullInfoCardTemplate, obj);
};

/* save value from search bar */

function saveInputValue() {
    const val = document.querySelector('.search__input').value;
    let lowerCaseValue = val.toLowerCase();
    return lowerCaseValue;
}

/* show cards number */

const displayEmployeesAmountText = (cardsAmount, text) => {
    return cardsNumber.textContent = cardsAmount + ' ' + text;
};

const showCardsNumber = (arr) => {
    const amount = arr.length;
    if (arr.length > 1) {
        displayEmployeesAmountText(amount, 'employees displayed');
    } else {
        displayEmployeesAmountText(amount, 'employee displayed');
    }
};

// find employee obj in cards by id
function getObjWithFullInfoAboutEmployee(id) {
    const card = allCards.filter((card) => card.id == id)[0];
    fetchOneEmployee(card.id);
    return card;
};

/* adding table head to DOM */

const appendTableHead = () => {
    tableHead.innerHTML = tableHeadTemplate;
    tableCards.append(tableHead);
    cardsArea.append(tableCards);
}

/* sorting cards */

function ascSortCards(a, b) {
    if (a.engName < b.engName) return -1;
    if (a.engName > b.engName ) return 1;
    return 0;
}

function descSortCards(a, b) {
    if (a.engName < b.engName) return 1;
    if (a.engName > b.engName ) return -1;
    return 0;
}

const sortCardsByClick = (cards) => {
    clickAmount += 1;
    if (clickAmount % 3 === 1) {
        tableBody.innerHTML = createCards(tableCardTemplate, cards.sort(ascSortCards), tableCards);
        appendTableHead();
    } else if (clickAmount % 3 === 2) {
        tableBody.innerHTML = createCards(tableCardTemplate, cards.sort(descSortCards), tableCards);
        appendTableHead();
    } else {
        tableBody.innerHTML = createCards(tableCardTemplate, cards, tableCards);
        appendTableHead();
    }
};

function onTableHeadClick() {
    let cardsInOrderAsInObj= [];
    allCards.forEach((card) => {
        cardsInOrderAsInObj.push(card);
    });
    sortCardsByClick(cardsInOrderAsInObj);
}

/* request wrapper */
function fetch(url, method = 'GET') {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json'; // equal to JSON.parse()
        xhr.open(method, url);
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }
        xhr.onerror = () => {
            reject(xhr.response);
        }
        xhr.send();
    });
}

/* requests */

const fetchOneEmployee = (id) => {
    fetch(oneEmployeeRequestByIdURL(id))
        .then(data => {
            createFullCardLayoutFromTemplate(data);
        })
        .catch(err => console.log(err));
}

const fetchAllEmployees = () => {
    fetch(allEmployeesRequestURL)
        .then(data => {
            allCards = data.cards; /* get data from json */
            let cardComponents = allCards.map(createGridCards);
            showCardsNumber(cardComponents);
        })
        .catch(err => console.log(err));
}

const fetchFilteredEmployees = () => {
    let inputValue = saveInputValue();
    fetch(filteredEmployeesRequestURL(inputValue))
        .then(data => {
            if (isGrid) {
                createCards(gridCardTemplate, data, gridCards);
                showCardsNumber(data);
            } else {
                createCards(tableCardTemplate, data, tableCards);
                appendTableHead();
                showCardsNumber(data);
            }
        })
        .catch(err => console.log(err));
};

window.addEventListener('load', () => {
    tableHeadTemplate = document.getElementById('tableHead').textContent;
    gridCardTemplate = document.getElementById('gridCard').textContent;
    tableCardTemplate = document.getElementById('tableCard').textContent;
    fullInfoCardTemplate = document.getElementById('personalCard').textContent;

    searchContainer.addEventListener('submit', (event) => {
        event.preventDefault();
        fetchFilteredEmployees();
    });

    gridViewButton.addEventListener('click', () => {
        isGrid = true;
        const cardComponents = allCards.map(createGridCards);
        cardsArea.removeChild(tableCards);
        tableViewButton.style.backgroundImage = "url('../assets/img/icons/line-view-inactive.png')";
        gridViewButton.style.backgroundImage = "url('../assets/img/icons/grid-view-active.png')";
    });

    tableViewButton.addEventListener('click', () => {
        isGrid = false;
        cardsArea.removeChild(gridCards);
        tableBody.append(allCards.map(createTableCards));
        appendTableHead();
        gridViewButton.style.backgroundImage = "url('../assets/img/icons/grid-view-inactive.png')";
        tableViewButton.style.backgroundImage = "url('../assets/img/icons/line-view-active.png')";
    });

    fetchAllEmployees();
});
