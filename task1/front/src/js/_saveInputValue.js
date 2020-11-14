function saveInputValue() {
    const val = document.querySelector('.search__input').value;
    let lowerCaseValue = val.toLowerCase();
    return lowerCaseValue;
}
