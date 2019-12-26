import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { withRouter,NavLink } from 'react-router-dom';
import classes from './SubHeader.module.css';

const subHeader = (props) => {
    let subMenu = null;

    if(props.showSubMenu) {
        subMenu = (
            <Menu.Menu position='right'>
            <Menu.Item
              name='signup'
              as={NavLink}
              to='/home'
            >
              <Icon  name='home' size='large' />
            </Menu.Item>
  
            {/* <Menu.Item
              name='help'
            >
              Help
            </Menu.Item> */}
          </Menu.Menu>
        );
    }
    return (
        <>
            <Menu className='borderless' inverted style={{ background: '#189a64' }}>
                <Menu.Item onClick={props.history.goBack} className={classes.Logo} ><Icon  name='arrow circle left' size='large' /></Menu.Item>
                <Menu.Item header style={{ border: 'none' }}><h4>{props.header}</h4></Menu.Item>

                {subMenu}
            </Menu>
            {props.children}
        </>
    )
}


export default withRouter(subHeader);