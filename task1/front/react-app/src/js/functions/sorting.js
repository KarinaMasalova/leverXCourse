function ascSortCards(a, b) {
    if (a.engName < b.engName) return -1;
    if (a.engName > b.engName) return 1;
    return 0;
}

function descSortCards(a, b) {
    if (a.engName < b.engName) return 1;
    if (a.engName > b.engName) return -1;
    return 0;
}

export { ascSortCards, descSortCards };
