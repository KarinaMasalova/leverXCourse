import { combineReducers } from 'redux';

import allRequestCardsReducer from './allRequestCardsReducer';
import selectedValueReducer from './selectedValueReducer';

const rootReducer = combineReducers({
    allRequestCardsReducer,
    selectedValueReducer
});

export default rootReducer;