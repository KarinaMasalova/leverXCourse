import { combineReducers } from 'redux';

import allRequestCardsReducer from './allRequestCardsReducer';
import selectedValueReducer from './selectedValueReducer';
import availableDaysReducer from './availableDaysReducer';
import currentRequestCardReducer from './currentRequestCardReducer';

const rootReducer = combineReducers({
    allRequestCardsReducer,
    selectedValueReducer,
    availableDaysReducer,
    currentRequestCardReducer
});

export default rootReducer;