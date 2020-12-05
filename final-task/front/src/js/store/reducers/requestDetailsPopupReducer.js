const initialState = {
    isRequestDetailsPopupShown: false
};

export default function requestDetailsPopupReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_REQUEST_DETAILS_POPUP":
            return {
                isRequestDetailsPopupShown: action.payload
            }
        default:
            return state;
    }
}
