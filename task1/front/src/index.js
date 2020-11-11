const cards = [
    {
        id: 1,
        sex: 'Mr',
        photo: 'img/1.jpg',
        engName: 'Dzmitry Antonenka',
        ruName: 'Дмитрий Антоненко',
        department: 'Accounting',
        room: 1601,
        internalPhone: 123,
        mobilePhone: '+375291234567',
        email: 'dzmitry.antonenka@gmail.com',
        skypeID: 'd.antonenka',
        cNumber: 'C5200001',
        hireDate: '12 Jan 2010',
        status: 'active',
        startOfEmploymentPeriod: '12 Jan 2010',
        workingDayDuration: '8 hours',
        vacation: 'Enabled',
        businessCard: 'Business card'
    },
    {
        id: 2,
        sex: 'Mr',
        photo: 'img/2.jpg',
        engName: 'Aleh Zhukau',
        ruName: 'Олег Жуков',
        department: 'Web & Mobile',
        room: 1608,
        internalPhone: 123,
        mobilePhone: '+375291234567',
        email: 'aleh.zhukau@gmail.com',
        skypeID: 'a.zhukau',
        cNumber: 'C5200001',
        hireDate: '12 Jan 2010',
        status: 'active',
        startOfEmploymentPeriod: '12 Jan 2010',
        workingDayDuration: '8 hours',
        vacation: 'Enabled',
        businessCard: 'Business card'
    },
    {
        id: 3,
        sex: 'Mr',
        photo: 'img/3.jpg',
        engName: 'Maxim Podolsky',
        ruName: 'Максим Подольский',
        department: 'Accounting',
        room: 1607,
        internalPhone: 123,
        mobilePhone: '+375291234567',
        email: 'maxim.podolsky@gmail.com',
        skypeID: 'm.podolsky',
        cNumber: 'C5200001',
        hireDate: '12 Jan 2010',
        status: 'active',
        startOfEmploymentPeriod: '12 Jan 2010',
        workingDayDuration: '8 hours',
        vacation: 'Enabled',
        businessCard: 'Business card'
    },
    {
        id: 4,
        sex: 'Mrs',
        photo: 'img/4.jpg',
        engName: 'Anna Belova',
        ruName: 'Анна Белова',
        department: 'Web & Mobile',
        room: 1608,
        internalPhone: 123,
        mobilePhone: '+375291234567',
        email: 'anna.belova@gmail.com',
        skypeID: 'a.belova',
        cNumber: 'C5200001',
        hireDate: '12 Jan 2010',
        status: 'active',
        startOfEmploymentPeriod: '12 Jan 2010',
        workingDayDuration: '8 hours',
        vacation: 'Enabled',
        businessCard: 'Business card'
    },
    {
        id: 5,
        sex: 'Mr',
        photo: 'img/5.jpg',
        engName: 'Vitaliy Vlasov',
        ruName: 'Виталий Власов',
        department: 'Web & Mobile',
        room: 1609,
        internalPhone: 123,
        mobilePhone: '+375291234567',
        email: 'vitaliy.vlasov@gmail.com',
        skypeID: 'v.vlasov',
        cNumber: 'C5200001',
        hireDate: '12 Jan 2010',
        status: 'active',
        startOfEmploymentPeriod: '12 Jan 2010',
        workingDayDuration: '8 hours',
        vacation: 'Enabled',
        businessCard: 'Business card'
    },
    {
        id: 6,
        sex: 'Mr',
        photo: 'img/6.jpg',
        engName: 'Stepan Smirnov',
        ruName: 'Степан Смирнов',
        department: 'Web & Mobile',
        room: 1610,
        internalPhone: 123,
        mobilePhone: '+375291234567',
        email: 'stepan.smirnov@gmail.com',
        skypeID: 's.smirnov',
        cNumber: 'C5200001',
        hireDate: '12 Jan 2010',
        status: 'active',
        startOfEmploymentPeriod: '12 Jan 2010',
        workingDayDuration: '8 hours',
        vacation: 'Enabled',
        businessCard: 'Business card'
    },
    {
        id: 7,
        sex: 'Mrs',
        photo: 'img/7.jpg',
        engName: 'Karina Masalova',
        ruName: 'Карина Масалова',
        department: 'Web & Mobile',
        room: 1608,
        internalPhone: 123,
        mobilePhone: '+375291234567',
        email: 'masalova.karina@gmail.com',
        skypeID: 'k.masalova',
        cNumber: 'C5200001',
        hireDate: '12 Jan 2010',
        status: 'active',
        startOfEmploymentPeriod: '12 Jan 2010',
        workingDayDuration: '8 hours',
        vacation: 'Enabled',
        businessCard: 'Business card'
    },
];

// find employee obj in cards by id
const obj = function getObjWithFullInfoAboutEmployee(id = 1) { /* ??? id by default */
    const card = cards.filter((card) => card.id == id)[0];
    return card;
}();

console.log(obj)

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

window.addEventListener('load', () => {
    const cardsArea = document.querySelector('.cards-area');
    const searchContainer = document.querySelector('.search__container');
    const tableViewButton = document.querySelector('.ico__table-view');
    const gridViewButton = document.querySelector('.ico__grid-view');
    const gridCards = createElement('div', 'cards');
    const tableCards = createElement('table', 'cards-table');
    tableCards.setAttribute('cellpadding', '15%');
    const tableHead = document.createElement('thead', 'thead');
    const tableHeadTemplate = document.getElementById('tableHead').textContent;
    const tableBody = createElement('tbody');
    const gridCardTemplate = document.getElementById('gridCard').textContent;
    const tableCardTemplate = document.getElementById('tableCard').textContent;
    const fullInfoCardTemplate = document.getElementById('personalCard').textContent;
    const cardsNumber = document.querySelector('.cards-number');
    const main = document.querySelector('main');

    /* show template in console with replaced fields */
    console.log(mapFullInfoCard(fullInfoCardTemplate, obj));

    const createFullCardLayoutFromTemplate = () => {
        main.innerHTML = mapFullInfoCard(fullInfoCardTemplate, obj);
    };

    //console.log(createFullCardLayoutFromTemplate());

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
                    .replace('$id', card.id)
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
        cardsArea.removeChild(gridCards);
        tableHead.innerHTML = tableHeadTemplate;
        tableBody.append(cards.map(createTableCards));
        tableCards.append(tableHead);
        cardsArea.append(tableCards);
        gridViewButton.style.backgroundImage = "url('../assets/img/icons/grid-view-inactive.png')";
        tableViewButton.style.backgroundImage = "url('../assets/img/icons/line-view-active.png')";
    });
});
