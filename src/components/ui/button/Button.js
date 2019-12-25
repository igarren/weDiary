import React from 'react';
import { Button } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";
import classes from './Button.module.css';

const button = (props) => {
    let buttonElement = null;
    switch (props.btnType) {
        case ('action'):
            buttonElement =
                <Button 
                    fluid
                    className={[classes.Button, classes[props.btnStyle]].join(' ')}
                    onClick={props.clicked}>{props.children}
                </Button>;
            break;
        case ('navigate'):
            buttonElement =
                <Button
                    fluid
                    className={[classes.Button, classes[props.btnStyle]].join(' ')}
                    onClick={props.clicked} as={NavLink} to={props.path}>{props.children}
                </Button>;
            break;
    }

    return (
        <>
            {buttonElement}
        </>
    )
};


export default button;