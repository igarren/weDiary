import React from 'react';
import { Form } from 'semantic-ui-react';
import classes from './TextArea.module.css';
const textArea = (props) => (

    <Form className={classes.TextArea}>

        <Form.TextArea
            value={props.value}
            label={props.label}
            placeholder={props.placeholder}
            rows='10'
            onChange={props.changed} />
    </Form>

);

export default textArea;