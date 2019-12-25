import React, { useState } from 'react';

import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import HeaderNavigation from '../../components/header-navigation/HeaderNavigation';
import Button from '../../components/ui/button/Button.js';
import Table from '../../components/ui/table/Table.js';
import ButtonGroup from '../../components/ui/button-group/ButtonGroup';
import classes from './Home.module.css';


const Home = (props) => {

    return (
        <>
            <HeaderNavigation />
            <div className={classes.Home}>
                <Grid centered columns={5}>
                    <Grid.Row>
                        <Grid.Column className={classes.Button} width={2}> <Button btnType='action' btnStyle='Main'> ≪ </Button> </Grid.Column>
                        <Grid.Column className={classes.Button}  width={3}> <Button btnType='action' btnStyle='Main'> 今週 </Button>  </Grid.Column>
                        <Grid.Column className={classes.Button}  width={2}> <Button btnType='action' btnStyle='Main'> ≫ </Button>  </Grid.Column>
                        <Grid.Column className={classes.Button}  width={3}> <Button btnType='action' btnStyle='Main'> 一覧 </Button>  </Grid.Column>
                        <Grid.Column className={classes.Button}  width={5}> <Button btnType='navigate' btnStyle='Main' path='/calendar'> カレンダー </Button>  </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Table
                    currentWeekGoal={props.currentWeekGoal}
                    currentWeekAnalysis={props.currentWeekAnalysis}
                    weekData={props.weekData}
                    nextWeekGoal={props.nextWeekGoal} />
            </div>
        </>
    )

}

const mapStateToProps = state => {
    return {
        currentWeekGoal: state.currentWeekGoal,
        currentWeekAnalysis: state.currentWeekAnalysis,
        weekData: state.weekData,
        nextWeekGoal: state.nextWeekGoal
    }
};



export default connect(mapStateToProps)(Home);