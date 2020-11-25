import { combineReducers } from 'redux';

import allCardsReducer from './allCardsReducer';
import cardsViewReducer from './cardsViewReducer';
import employeesAmountReducer from './employeesAmountReducer';

const rootReducer = combineReducers({
    cardsViewReducer,
    allCardsReducer,
    employeesAmountReducer
});

export default rootReducer;