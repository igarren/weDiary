import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import classes from './TableInput.module.css';


const tableInput = (props) => {
    const editMainInfoDataHandler = (action) => (props.history.push('/edit/' + action));
    return (
            <Table.Row>
                <Table.Cell
                    textAlign='center'
                    className={classes[props.class]}
                    width={props.firstWidth}>
                    {props.children}
                </Table.Cell>
                <Table.Cell
                    width={props.secondWidth}
                    colSpan='2'
                    onClick={() => editMainInfoDataHandler(props.action)}>{props.data} </Table.Cell>
            </Table.Row>
    )
}

export default withRouter(tableInput);