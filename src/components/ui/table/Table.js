import React from 'react';
import { Table } from 'semantic-ui-react';
import classes from './Table.module.css';
import TableDaily from './table-daily/TableDaily';
import TableInput from './table-input/TableInput';




const table = (props) => {

    let currentWeek = null;
    let weekAnalysis = null;
    let nextWeek = null;


    if (props.currentWeekGoal) currentWeek = (
        <TableInput
            data={props.currentWeekGoal}
            firstWidth='5'
            secondWidth='13'
            action='current-week'
            class='CurrentWeek'> 今週の目標<br />やりたいこと </TableInput>);

    if (props.currentWeekAnalysis) weekAnalysis = (
        <TableInput
            data={props.currentWeekAnalysis}
            firstWidth='5'
            secondWidth='13'
            action='current-analysis'
            class='CurrentWeekAnalysis'> ふりかえり</TableInput>);

    if (props.nextWeekGoal) nextWeek = (
        <Table unstackable celled >
        <Table.Body>
        <TableInput
            data={props.nextWeekGoal}
            firstWidth='5'
            secondWidth='16'
            action='next-week'
            class='NextWeek'>  来週の目標<br />やりたいこと </TableInput></Table.Body></Table>);
    return (
        <div className={classes.TableDock} >
            <Table unstackable celled className={classes.Table}>
                <Table.Body>{currentWeek}<TableDaily weekData={props.weekData} />{ weekAnalysis }</Table.Body>
            </Table>
            { nextWeek }
        </div >
    )
};


export default table; 