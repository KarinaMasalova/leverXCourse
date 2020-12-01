const initialState = {
    allRequests: []
};

export default function allRequestCardsReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_ALL_REQUEST_CARDS":
            return {
                allRequests: action.payload
            }
        default:
            return state;
    }
}
