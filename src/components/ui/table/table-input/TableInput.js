import React from 'react';
import { withRouter } from 'react-router-dom';
import { Table } from 'semantic-ui-react';
import classes from './TableInput.module.css';


const tableInput = (props) => {
    const editMainInfoDataHandler = (action) => (props.history.push('/edit/' + action));
    return (
            <Table.Row className={[classes.TableHeader, classes[props.class]].join(' ')}>
                <Table.HeaderCell
                    textAlign='center' >
                    {props.children}
                </Table.HeaderCell>

                <Table.Cell
                    colSpan='2'
                    onClick={() => editMainInfoDataHandler(props.action)}>{props.data} </Table.Cell> 
            </Table.Row>
    )
}

export default withRouter(tableInput);