
const initialState = {
    currentWeekGoal: '開発',
    currentWeekAnalysis: '開発完了',
    nextWeekGoal: '単体テスト',
    weekData: [
        {
            key: '2019-12-23', date: '12月23日', day: '月', details: 'Okay', satisfactionLevel: 'smile'
        },
        {
            key: '2019-12-24', date: '12月24日', day: '火', details: 'Okayish', satisfactionLevel: 'meh'
        },
        {
            key: '2019-12-25', date: '12月25日', day: '水', details: 'Not Okay', satisfactionLevel: 'frown'
        },
        {
            key: '2019-12-26', date: '12月26日', day: '木', details: 'Okay', satisfactionLevel: 'smile'
        },
        {
            key: '2019-12-27', date: '12月27日', day: '金', details: 'Good', satisfactionLevel: 'smile'
        }
    ]

};

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
