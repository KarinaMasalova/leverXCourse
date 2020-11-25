const initialState = {
    inputValue: ''
};

export default function searchInputValueReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_SEARCH_INPUT_VALUE":
            return {
                inputValue: action.payload
            }
        default:
            return state;
    }
}
