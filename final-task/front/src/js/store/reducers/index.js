import { combineReducers } from 'redux';

import allRequestCardsReducer from './allRequestCardsReducer';
import selectedValueReducer from './selectedValueReducer';
import availableDaysReducer from './availableDaysReducer';
import requestDetailsPopupReducer from './requestDetailsPopupReducer';
import currentRequestCardReducer from './currentRequestCardReducer';
import currentRequestCardIdReducer from './currentRequestCardIdReducer';

const rootReducer = combineReducers({
    allRequestCardsReducer,
    selectedValueReducer,
    availableDaysReducer,
    requestDetailsPopupReducer,
    currentRequestCardReducer,
    currentRequestCardIdReducer
});

export default rootReducer;