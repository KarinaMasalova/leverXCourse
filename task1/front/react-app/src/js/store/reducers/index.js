import { combineReducers } from 'redux';

import allCardsReducer from './allCardsReducer';
import cardsViewReducer from './cardsViewReducer';
import employeesAmountReducer from './employeesAmountReducer';
import searchInputValueReducer from './searchInputValueReducer';

const rootReducer = combineReducers({
    cardsViewReducer,
    allCardsReducer,
    employeesAmountReducer,
    searchInputValueReducer
});

export default rootReducer;