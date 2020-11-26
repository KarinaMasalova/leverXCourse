const initialState = {
    employeesAmount: '0 employee'
};

export default function employeesAmountReducer(state = initialState, action) {
    switch(action.type) {
        case "SET_EMPLOYEES_AMOUNT":
            return {
                employeesAmount: action.payload
            }
        default:
            return state;
    }
}
