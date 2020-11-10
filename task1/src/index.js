const cards = [
    {
        photo: 'img/1.jpg',
        engName: 'Dzmitry Antonenka',
        ruName: 'Дмитрий Антоненко',
        department: 'Accounting',
        room: 1601,
    },
    {
        photo: 'img/2.jpg',
        engName: 'Aleh Zhukau',
        ruName: 'Олег Жуков',
        department: 'Web & Mobile',
        room: 1608,
    },
    {
        photo: 'img/3.jpg',
        engName: 'Maxim Podolsky',
        ruName: 'Максим Подольский',
        department: 'Accounting',
        room: 1607,
    },
    {
        photo: 'img/4.jpg',
        engName: 'Anna Belova',
        ruName: 'Анна Белова',
        department: 'Web & Mobile',
        room: 1608,
    },
    {
        photo: 'img/5.jpg',
        engName: 'Vitaliy Vlasov',
        ruName: 'Виталий Власов',
        department: 'Web & Mobile',
        room: 1609,
    },
    {
        photo: 'img/6.jpg',
        engName: 'Stepan Smirnov',
        ruName: 'Степан Смирнов',
        department: 'Web & Mobile',
        room: 1610,
    },
    {
        photo: 'img/7.jpg',
        engName: 'Karina Masalova',
        ruName: 'Карина Масалова',
        department: 'Web & Mobile',
        room: 1608,
    },
];

window.addEventListener('load', () => {
    const cardsArea = document.querySelector('.cards-area');
    const searchContainer = document.querySelector('.search__container');
    const tableViewButton = document.querySelector('.ico__table-view');
    const gridViewButton = document.querySelector('.ico__grid-view');
    const gridCards = createElement('div', 'cards');
    const tableCards = createElement('table', 'cards-table');
    tableCards.setAttribute('cellpadding', '15%');
    const gridCardTemplate = document.getElementById('gridCard').textContent;
    const tableCardTemplate = document.getElementById('tableCard').textContent;
    const cardsNumber = document.querySelector('.cards-number');
   
    /* helper for creating elements */
    function createElement(tag, ...classes) {
        const element = document.createElement(tag);
        if (classes) {
          element.classList.add(...classes);
        }
        return element;
    }

    const mapCards = (cardTemplate, cards) => {
        return cards
            .map((card) => 
                cardTemplate
                    .replace('$altName', card.engName)
                    .replace('$img', card.photo)
                    .replace('$name', card.engName)
                    .replace('$nativeName', card.ruName)
                    .replace('$department', card.department)
                    .replace('$room', card.room)
            )
            .join('');
    };

    const createGridCards = () => {
        gridCards.innerHTML = mapCards(gridCardTemplate, cards);
        cardsArea.append(gridCards);
    };

    const createTableCards = () => {
        tableCards.innerHTML = mapCards(tableCardTemplate, cards);
        cardsArea.append(tableCards);
    };

    function saveInputValue() {
        const val = document.querySelector('.search__input').value;
        let lowerCaseValue = val.toLowerCase();
        return lowerCaseValue;
    }

    function findEmployeeCardByName(cards) {  
        let inputValue = saveInputValue();
        let filteredCards = cards.filter((card) => {
            return card.engName
                .toLowerCase()
                .includes(inputValue.toLowerCase().trim())
            ||
            card.ruName
                .toLowerCase()
                .includes(inputValue.toLowerCase().trim());
        });
        return filteredCards;
    };

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

    const createFilteredGridCards = ()  => {
        const filteredCards = findEmployeeCardByName(cards);
        gridCards.innerHTML = mapCards(gridCardTemplate, filteredCards);
        showCardsNumber(filteredCards);
        cardsArea.append(gridCards);
    };

    const createFilteredTableCards = ()  => {
        const filteredCards = findEmployeeCardByName(cards);
        tableCards.innerHTML = mapCards(tableCardTemplate, filteredCards);
        showCardsNumber(filteredCards);
        cardsArea.append(tableCards);
    };

    /* creating cards */
    let cardComponents = cards.map(createGridCards);
    showCardsNumber(cardComponents);

    searchContainer.addEventListener('submit', (event) => {
        event.preventDefault();
        if(cardsArea.contains(tableCards)) {
            createFilteredTableCards();
        } else {
            createFilteredGridCards();
        }
    });

    gridViewButton.addEventListener('click', () => {
        const cardComponents = cards.map(createGridCards);
        cardsArea.removeChild(tableCards);
        tableViewButton.style.backgroundImage = "url('../assets/img/icons/line-view-inactive.png')";
        gridViewButton.style.backgroundImage = "url('../assets/img/icons/grid-view-active.png')";
    });

    tableViewButton.addEventListener('click', () => {
        const cardComponents = cards.map(createTableCards);
        cardsArea.removeChild(gridCards);
        gridViewButton.style.backgroundImage = "url('../assets/img/icons/grid-view-inactive.png')";
        tableViewButton.style.backgroundImage = "url('../assets/img/icons/line-view-active.png')";
    });
});
