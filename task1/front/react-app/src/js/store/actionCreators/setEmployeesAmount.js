const setEmployeesAmount = (amount) => ({type: "SET_EMPLOYEES_AMOUNT", payload: (amount > 1)
    ? `${amount} employees displayed`
    : `${amount} employee displayed`});

export default setEmployeesAmount;