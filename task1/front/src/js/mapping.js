const mapCards = (cardTemplate, cards) => {
    return cards
        .map((card) => 
            cardTemplate.element
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
    return template.element
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

const mapLoginInTable = (template, user) => {
    return template
        .replaceAll('$login', user.login);
};

export { mapCards, mapFullInfoCard, mapLoginInTable };
