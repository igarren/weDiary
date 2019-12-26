import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import classes from './HeaderNavigation.module.css';

const headerNavigation = (props) => {

    return (
        <>
            <Menu widths={3} borderless inverted style={{ background: '#189a64' }}>
                <Menu.Item className={classes.ItemCustom} 　header ><h2 style={{ textShadow: '3px 2px gray' }}>WEDiary</h2></Menu.Item>

                <Menu.Item widths={2} header style={{ textAlign: 'left' }}>
                    <p className={classes.Header}>ワーク・エンゲージメント
                    <br className={classes.MobileDisplay}/>ダイアリー</p></Menu.Item>

                <Menu.Menu  icon='labeled' position='right' >
                    <Menu icon='labeled' inverted style={{ background: '#189a64' }}>
                    <Menu.Item name='info circle'  
                        className={classes.Logo} 
                        as={NavLink} to={props.info}>
                        <Icon name='info circle' size='large' />
                        <p className={classes.DesktopDisplay}>情報</p>
                    </Menu.Item>
                    <Menu.Item 
                        className={classes.Logo} 
                        as={NavLink} to={props.chart}
                        name='line graph'>
                        <Icon name='line graph' size='large' />
                        <p className={classes.DesktopDisplay}>チャート</p>
                    </Menu.Item>
                    <Menu.Item name='setting'　
                        className={classes.Logo} 
                        as={NavLink} to={props.settings}>
                        <Icon name='setting' size='large' />
                        <p className={classes.DesktopDisplay}>設定</p>
                    </Menu.Item>
                    </Menu>
                </Menu.Menu>
            </Menu>

        </>
    )
}


export default headerNavigation;