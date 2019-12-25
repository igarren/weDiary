import React from 'react';
import { Menu,  Icon  } from 'semantic-ui-react';
import classes from  './HeaderNavigation.module.css';

const headerNavigation = (props) => {

    return (
        <>
            <Menu widths={3} className='borderless' inverted style={{background: '#189a64'}}>
                <Menu.Item 　header style={{border: 'none'}}><h3>WEDiary</h3></Menu.Item>
               
                <Menu.Item header style={{border: 'none'}}><h5>ワーク・エンゲージメント
                    <br/>ダイアリー</h5></Menu.Item>
               
                <Menu.Menu position='right'>
                    <Menu.Item className={classes.Logo} ><Icon name='info circle' size='large' /></Menu.Item>
                    <Menu.Item className={classes.Logo} ><Icon name='line graph' size='large' /></Menu.Item>
                    <Menu.Item className={classes.Logo} ><Icon name='setting' size='large' /></Menu.Item>
                </Menu.Menu>
            </Menu>
            
        </>
    )
}


export default headerNavigation;