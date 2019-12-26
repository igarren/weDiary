import React, {useState} from 'react';

import { Grid } from 'semantic-ui-react';
import SubHeader from '../../../components/header-navigation/sub-header/SubHeader'
import Button from '../../../components/ui/button/Button.js';
import Graph from '../../../components/ui/graph/Graph.js';

import classes from './ChartViewMonthly.module.css';


const ChartViewMonthly = (props) => {

    const [initialState, setState] = useState({
        data : [
            {
                date: '12/2', satisfaction: 3
            },
            {
                date: '12/3', satisfaction: 0.5
            },
            {
                date: '12/4', satisfaction: 6.9
            },
            {
                date: '12/5', satisfaction: 2.3
            },
            {
                date: '12/6', satisfaction: 4.1
            },
            {
                date: '12/9', satisfaction: 7
            },
            {
                date: '12/10', satisfaction: 1.7
            },
            {
                date: '12/11', satisfaction: 5
            },
            {
                date: '12/12', satisfaction: 2
            },
            {
                date: '12/13', satisfaction: 1
            },
			{
                date: '12/16', satisfaction: 3
            },
            {
                date: '12/17', satisfaction: 0.5
            },
            {
                date: '12/18', satisfaction: 6.9
            },
            {
                date: '12/19', satisfaction: 2.3
            },
            {
                date: '12/20', satisfaction: 4.1
            },
            {
                date: '12/23', satisfaction: 7
            },
            {
                date: '12/24', satisfaction: 1.7
            },
            {
                date: '12/25', satisfaction: 5
            },
            {
                date: '12/26', satisfaction: 2
            },
            {
                date: '12/27', satisfaction: 1
            }			
        ]
    });

    return (
        <>

            <SubHeader header='週間チャート' />
            <div className='Container'>
                <Grid style={{ marginBottom: '10px' }} centered columns={3}>
                    <Grid.Row className='HomeButtonGroup'>
                        <Grid.Column className='ButtonNotPadded' width={2}> <Button btnType='action' btnStyle='Main'> ≪ </Button> </Grid.Column>
                        <Grid.Column className='ButtonNotPadded' width={5}> <Button btnType='action' btnStyle='Main'> 今月 </Button>  </Grid.Column>
                        <Grid.Column className='ButtonNotPadded' width={2}> <Button btnType='action' btnStyle='Main'> ≫ </Button>  </Grid.Column>
                                 </Grid.Row>
                </Grid>
                <Graph data={initialState.data} />
            </div>
        </>
    )

}


export default ChartViewMonthly;