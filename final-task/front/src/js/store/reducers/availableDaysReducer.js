const initialState = {
    availableDays: 147
};

export default function availableDaysReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_AVAILABLE_DAYS":
            return {
                availableDays: action.payload
            }
        default:
            return state;
    }
}
