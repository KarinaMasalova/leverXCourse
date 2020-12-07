const initialState = {
    currentCardID: null
};

export default function currentRequestCardIdReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_CURRENT_REQUEST_CARD_ID":
            return {
                currentCardID: action.payload
            }
        default:
            return state;
    }
}
