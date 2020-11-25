const initialState = {
    isGrid: true
};

export default function setCardsViewReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_GRID_VIEW":
            return {
                isGrid: true
            }
        case "SET_TABLE_VIEW":
            return {
                isGrid: false
            }
        default:
            return state;
    }
}
