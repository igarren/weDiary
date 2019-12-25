import React from 'react';

import Calendar from "../../components/calendar/Calendar";
import SubHeader from '../../components/header-navigation/sub-header/SubHeader';
import TextArea from '../../components/ui/text-area/TextArea';
import classes from './CalendarView.module.css';


const calendarView = props => {
 
    const editDailyInfoDataHandler = (action) => {
        const offset = action.getTimezoneOffset(); 
        action = new Date(action.getTime() + (offset*60*1000)); 
        props.history.push('/edit/daily/' + action.toISOString().split('T')[0]);
    };
    return (
        <>
            <SubHeader />
            <div className={classes.CalendarView}>

                <Calendar select={editDailyInfoDataHandler} />
                <TextArea label='今日できたこと' placeholder='今日、仕事でできたことを書いてください' />
            </div>
        </>
    )
}

export default calendarView;
