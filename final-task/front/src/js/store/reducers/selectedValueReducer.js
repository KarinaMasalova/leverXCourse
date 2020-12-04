const initialState = {
    selectedValue: 'Vacation'
};

export default function selectedValueReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_SELECTED_VALUE":
            return {
                selectedValue: action.payload
            }
        default:
            return state;
    }
}
