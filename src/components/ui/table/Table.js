import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import classes from './Table.module.css';



const table = (props) => {
    const editMainInfoDataHandler = (action)=> (props.history.push('/edit/' + action));
    const editDailyInfoDataHandler = (action)=> (props.history.push('/edit/daily/' + action));
    return (
        <div className={classes.TableDock} >
            <Table unstackable celled className={classes.Table}>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell
                            textAlign='center'
                            className={classes.CurrentWeek}
                            width='5'>
                            今週の目標<br />やりたいこと
                    </Table.Cell>
                        <Table.Cell 
                            width='13' 
                            colSpan='2' 
                            onClick={() =>editMainInfoDataHandler('current-week')}>{props.currentWeekGoal} </Table.Cell>
                    </Table.Row>
                    {props.weekData.map((day) => (
                        <Table.Row key={day.key}>
                            <Table.Cell
                                textAlign='center'
                                className={classes.Daily}>{day.date} <br /> （{day.day}）   </Table.Cell>
                            <Table.Cell>{day.details}  </Table.Cell>
                            <Table.Cell 
                                textAlign='center' 
                                onClick={() =>editDailyInfoDataHandler(day.key)}
                            > <Icon color ='yellow' size='big' name={day.satisfactionLevel}/> </Table.Cell>
                        </Table.Row>
                    ))}

                    <Table.Row>
                        <Table.Cell 
                            className={classes.CurrentWeekAnalysis} 
                            textAlign='center'
                             >ふりかえり </Table.Cell>
                        <Table.Cell 
                            colSpan='2'
                            onClick={() =>editMainInfoDataHandler('current-analysis')}
                            >{props.currentWeekAnalysis} </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
            <Table unstackable celled >
                <Table.Body>
                    <Table.Row>
                        <Table.Cell
                            textAlign='center'
                            className={classes.NextWeek}
                            width='5'
                            >
                            今週の目標<br />やりたいこと
                    </Table.Cell>
                        <Table.Cell width='16'  onClick={() =>editMainInfoDataHandler('next-week')}>{props.nextWeekGoal} </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div >
    )
};


export default withRouter(table); 