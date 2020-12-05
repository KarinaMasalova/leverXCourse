import { combineReducers } from 'redux';

import allRequestCardsReducer from './allRequestCardsReducer';
import selectedValueReducer from './selectedValueReducer';
import availableDaysReducer from './availableDaysReducer';
import requestDetailsPopupReducer from './requestDetailsPopupReducer';

const rootReducer = combineReducers({
    allRequestCardsReducer,
    selectedValueReducer,
    availableDaysReducer,
    requestDetailsPopupReducer
});

export default rootReducer;