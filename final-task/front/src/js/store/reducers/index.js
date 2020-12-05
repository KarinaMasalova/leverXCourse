import { combineReducers } from 'redux';

import allRequestCardsReducer from './allRequestCardsReducer';
import selectedValueReducer from './selectedValueReducer';
import availableDaysReducer from './availableDaysReducer';
import requestDetailsPopupReducer from './requestDetailsPopupReducer';
import currentRequestCardReducer from './currentRequestCardReducer';

const rootReducer = combineReducers({
    allRequestCardsReducer,
    selectedValueReducer,
    availableDaysReducer,
    requestDetailsPopupReducer,
    currentRequestCardReducer
});

export default rootReducer;