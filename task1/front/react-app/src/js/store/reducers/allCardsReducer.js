const initialState = {
    allCards: []
};

export default function allCardsReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_ALL_CARDS":
            return {
                allCards: action.payload
            }
        default:
            return state;
    }
}
