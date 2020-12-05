const MAX_AVAILABLE_DAYS = 147;
const setAvailableDays = (daysAmount) => ({type: "SET_AVAILABLE_DAYS", payload: MAX_AVAILABLE_DAYS - daysAmount});

export default setAvailableDays;