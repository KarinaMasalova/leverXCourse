const initialState = {
    currentCardID: null
};

export default function currentRequestCardReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_CURRENT_REQUEST_CARD":
            return {
                currentCardID: action.payload
            }
        default:
            return state;
    }
}
