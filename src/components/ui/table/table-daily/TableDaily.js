import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table, Icon } from 'semantic-ui-react';
import classes from './TableDaily.module.css';
const tableDaily = (props) => {
    const editDailyInfoDataHandler = (action)=> (props.history.push('/edit/daily/' + action));
   
    const rows = props.weekData.map((day) => (
        <Table.Row key={day.key}  onClick={() =>editDailyInfoDataHandler(day.key)}>
            <Table.Cell
          
                textAlign='center'
                className={classes.Daily}>{day.date} <br />（{day.day}）</Table.Cell>
            <Table.Cell  >{day.details}</Table.Cell>
            <Table.Cell 
                textAlign='center' 
            > <Icon color ='yellow' size='big' name={day.satisfactionLevel}/> </Table.Cell>
        </Table.Row>
    ));
    
    return(
        <> 
            { rows }
        </>
    )
};

export default withRouter(tableDaily);