import React from 'react';
import Calendar from 'react-calendar';
import classes from './Calendar.module.css';


const onClickDay= (value) => {
    console.log(value);
    alert( value)
}

const calendar = (props) =>(
    <Calendar 
        className={classes.Calendar} 
        locale='ja' 
        onClickDay={value => props.select(value)}    />
)
;
export default calendar;