import React from 'react';
import { Form } from 'semantic-ui-react';

const textArea = (props) => (

    <Form>

        <Form.TextArea
            value={props.value}
            label={props.label}
            placeholder={props.placeholder}
            rows='10'
            onChange={props.changed} />
    </Form>

);

export default textArea;