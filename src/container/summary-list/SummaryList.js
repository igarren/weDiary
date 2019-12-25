import React from 'react';
import { Grid } from 'semantic-ui-react';

import Table from '../../components/ui/table/Table';
import SubHeader from '../../components/header-navigation/sub-header/SubHeader';
import Button from '../../components/ui/button/Button';

import classes from './SummaryList.module.css';


const summaryList = (props) => {

    const sampleData = [
        {
            key: 1, date: '12月23日', day: '月', details: 'Okay', satisfactionLevel: 'smile'
        },
        {
            key: 2, date: '12月24日', day: '火', details: 'Okayish', satisfactionLevel: 'meh'
        },
        {
            key: 3, date: '12月25日', day: '水', details: 'Not Okay', satisfactionLevel: 'frown'
        },
        {
            key: 4, date: '12月26日', day: '木', details: 'Okay', satisfactionLevel: 'smile'
        },
        {
            key: 5, date: '12月27日', day: '金', details: 'Good', satisfactionLevel: 'smile'
        }
    ]

    return (
        <>
            <SubHeader header='できたこと一覧'/>
            <div className={classes.SummaryList}>
                <Grid centered columns={5}>
                    <Grid.Row>
                        <Grid.Column className={classes.Button} width={2}> <Button btnType='action' btnStyle='Main'> ≪ </Button> </Grid.Column>
                        <Grid.Column className={classes.Button} width={3}> <Button btnType='action' btnStyle='Main'> 最新 </Button>  </Grid.Column>
                        <Grid.Column className={classes.Button} width={2}> <Button btnType='action' btnStyle='Main'> ≫ </Button>  </Grid.Column>
                        {/* <Grid.Column className={classes.Button} width={3}> <Button btnType='navigate' btnStyle='Main' path='/summary-list'> 一覧 </Button>  </Grid.Column> */}
                        {/* <Grid.Column className={classes.Button} width={5}> <Button btnType='navigate' btnStyle='Main' path='/calendar'> カレンダー </Button>  </Grid.Column> */}
                    </Grid.Row>
                </Grid>
                <Table weekData={sampleData} />

            </div>
        </>
    )
}


export default summaryList;