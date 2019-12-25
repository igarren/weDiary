import React from 'react';
import {Button} from 'semantic-ui-react';

const buttonGroup = props =>(
    <Button.Group  >
        {props.children}
    </Button.Group>
);

export default buttonGroup;