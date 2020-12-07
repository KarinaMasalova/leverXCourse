const initialState = {
    currentCard: {}
};

export default function currentRequestCardReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_CURRENT_REQUEST_CARD":
            return {
                currentCard: action.payload
            }
        default:
            return state;
    }
}
