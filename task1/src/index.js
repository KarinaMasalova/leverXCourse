const cards = [
    {
        photo: 'img/1.jpg',
        engName: 'Dzmitry Antonenka',
        ruName: 'Дмитрий Антоненко',
        department: 'Web & Mobile',
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
        department: 'Web & Mobile',
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
    const gridCardTemplate = document.getElementById('gridCard').textContent;
    //const tableCardTemplate = document.getElementById('tableCard').textContent;
   
    /* helper for creating elements */
    function createElement(tag, ...classes) {
        const element = document.createElement(tag);
        if (classes) {
          element.classList.add(...classes);
        }
        return element;
    }

    /* doesn't work correctly yet */
    const showCardsNumber = (obj) => {
        const cardsNumber = document.querySelector('.cards-number');
        if (obj.length > 1) {
            cardsNumber.textContent = obj.length + ' employees displayed';
        } else {
            cardsNumber.textContent = obj.length + ' employee displayed';
        }
    };

    const mapCards = (cardTemplate, cards) => {
        return cards
            .map((card) => 
                cardTemplate
                    .replace('$img', `background-image:url('${card.photo}')`)
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

    /* creating cards */
    let cardComponents = cards.map(createGridCards);

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

    const createFilteredGridCards = ()  => {
        const filteredCards = findEmployeeCardByName(cards);
        gridCards.innerHTML = mapCards(gridCardTemplate, filteredCards);
        cardsArea.append(gridCards);
    };

    const createFilteredTableCards = ()  => {
        tableCards.innerHTML = mapCards(tableCardTemplate, filteredCards);
        cardsArea.append(tableCards);
    };

    searchContainer.addEventListener('submit', (event) => {
        event.preventDefault();
        createFilteredGridCards();
    });

    gridViewButton.addEventListener('click', () => {
        const cardComponents = cards.map(createGridCards);
        showCardsNumber(createGridCards);
        tableViewButton.style.backgroundImage = "url('../assets/img/icons/line-view-inactive.png')";
        gridViewButton.style.backgroundImage = "url('../assets/img/icons/grid-view-active.png')";
    });

    tableViewButton.addEventListener('click', () => {
        const cardComponents = cards.map(createTableCards);
        showCardsNumber(createTableCards);
        gridViewButton.style.backgroundImage = "url('../assets/img/icons/grid-view-inactive.png')";
        tableViewButton.style.backgroundImage = "url('../assets/img/icons/line-view-active.png')";
    });
});
