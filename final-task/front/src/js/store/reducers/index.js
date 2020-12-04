import { combineReducers } from 'redux';

import allRequestCardsReducer from './allRequestCardsReducer';
import selectedValueReducer from './selectedValueReducer';
import availableDaysReducer from './availableDaysReducer';

const rootReducer = combineReducers({
    allRequestCardsReducer,
    selectedValueReducer,
    availableDaysReducer
});

export default rootReducer;