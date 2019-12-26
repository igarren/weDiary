

const reducer = (state = initialState, action) => {
    console.log ('REDUCER ', action.type);
    switch (action.type) {
        case 'CURRENT_WEEK':
            return {
                ...state,
                currentWeekGoal: action.value
            }
        case 'CURRENT_ANALYSIS':
            return {
                ...state,
                currentWeekAnalysis: action.value
            }
        case 'NEXT_WEEK':
            return {
                ...state,
                nextWeekGoal: action.value
            }
    }
    return state;
}


export default reducer;
