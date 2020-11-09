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
    const tableViewButton = document.querySelector('.ico__table-view');
    const gridViewButton = document.querySelector('.ico__grid-view');
    const divCards = createElement('div', 'cards');
    const tableCards = createElement('table', 'cards-table');
    const cardsArea = document.querySelector('.cards-area');
    const searchContainer = document.querySelector('.search__container');

    /* helper for creating elements */
    function createElement(tag, ...classes) {
        const element = document.createElement(tag);
        if (classes) {
          element.classList.add(...classes);
        }
        return element;
    }

    /* cards with data from object */
    const cardsWithInfo = cards.map( (obj) => ({
        photo: obj.photo,
        engName: obj.engName,
        ruName: obj.ruName,
        department: obj.department,
        room: obj.room,
    }));

    /* doesn't work correctly yet */
    const showCardsNumber = (obj) => {
        const cardsNumber = document.querySelector('.cards-number');
        if (obj.length > 1) {
            cardsNumber.textContent = obj.length + ' employees displayed';
        } else {
            cardsNumber.textContent = obj.length + ' employee displayed';
        }
    };
    
    const createGridCardsFromObj = (obj) => {
        const card = createElement('div', 'card');
        const cardImg = createElement('div', 'card__img');
        const cardEngName = createElement('a', 'card__engName');
        const cardRuName = createElement('p', 'card__ruName');
        const cardInfo = createElement('div', 'card__info');
        const cardDepartment = createElement('div', 'department');
        const cardDepartmentIcon = createElement('span', 'ico', 'department__ico');
        const cardDepartmentKind = createElement('span', 'department__kind');
        const cardRoom = createElement('div', 'room');
        const cardRoomIcon = createElement('span', 'ico', 'room__ico');
        const cardRoomNumber = createElement('span', 'room__number');

        cardDepartment.append(cardDepartmentIcon, cardDepartmentKind);
        cardRoom.append(cardRoomIcon, cardRoomNumber);
        cardInfo.append(cardDepartment, cardRoom);
        card.append(cardImg, cardEngName, cardRuName, cardInfo);
        divCards.append(card);
        cardsArea.append(divCards);

        cardImg.style.backgroundImage = `url(${obj.photo})`;
        cardEngName.textContent += obj.engName;
        cardRuName.textContent += obj.ruName;
        cardDepartmentKind.textContent += obj.department;
        cardRoomNumber.textContent += obj.room;

        return cardsArea;
    };

    const createTableCardsFromObj = (obj) => {
        
        const tableHead = createElement('thead' ,'cards-table__head');
        const tableBody = createElement('tbody' ,'cards-table__body');
        /* ... */
        tableCards.append(tableHead, tableBody);

        return tableCards;
    };

    /* creating cards */
    let cardComponents = cardsWithInfo.map(createGridCardsFromObj);
    console.log(cardsWithInfo);

    function saveInputValue() {
        let res;
        const val = document.querySelector('.search__input').value;
        if (val !== '') res = val;
        else return false;
        return res;
    }

    /* filter cards by name */
    function findEmployeeCardByName(cards, name) {
        let filteredCards = cards.filter((value) => 
            value
                .toLocaleLowerCase() /* TypeError: value.toLocaleLowerCase is not a function */
                .includes(
                    value
                        .trim()
                        .toLocaleLowerCase() ||
                    name
                        .toLocaleLowerCase()
                        .includes(value.trim().toLocaleLowerCase()
                )
            ));
        return filteredCards;
    };

    searchContainer.addEventListener('submit', (event) => {
        event.preventDefault();
        let value = saveInputValue();
        findEmployeeCardByName(cardsWithInfo, value);
    });

    gridViewButton.addEventListener('click', () => {
        const cardComponents = cardsWithInfo.map(createGridCardsFromObj);
        showCardsNumber(createGridCardsFromObj);
        tableViewButton.style.backgroundImage = "url('../assets/img/icons/line-view-inactive.png')";
        gridViewButton.style.backgroundImage = "url('../assets/img/icons/grid-view-active.png')";
    });

    tableViewButton.addEventListener('click', () => {
        const cardComponents = cardsWithInfo.map(createTableCardsFromObj);
        showCardsNumber(createTableCardsFromObj);
        gridViewButton.style.backgroundImage = "url('../assets/img/icons/grid-view-inactive.png')";
        tableViewButton.style.backgroundImage = "url('../assets/img/icons/line-view-active.png')";
    });
});
