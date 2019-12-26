import React, {useState} from 'react';

import { Grid } from 'semantic-ui-react';
import SubHeader from '../../../components/header-navigation/sub-header/SubHeader'
import Button from '../../../components/ui/button/Button.js';
import Graph from '../../../components/ui/graph/Graph.js';

import classes from './ChartViewDaily.module.css';

const ChartViewDaily = (props) => {
    const [initialState, setState] = useState({
        data : [
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
                <Grid style={{ marginBottom: '10px' }} centered columns={4}>
                    <Grid.Row className='HomeButtonGroup'>
                        <Grid.Column className='ButtonNotPadded' width={2}> <Button btnType='action' btnStyle='Main'> ≪ </Button> </Grid.Column>
                        <Grid.Column className='ButtonNotPadded' width={5}> <Button btnType='action' btnStyle='Main'> 今週 </Button>  </Grid.Column>
                        <Grid.Column className='ButtonNotPadded' width={2}> <Button btnType='action' btnStyle='Main'> ≫ </Button>  </Grid.Column>
                        <Grid.Column className='ButtonNotPadded' width={4}> <Button btnType='navigate' btnStyle='Main' path='/chart-view-monthly'> 1ヶ月 </Button>  </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Graph data={initialState.data} />
            </div>
        </>
    )

}


export default ChartViewDaily;