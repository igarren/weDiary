import React, { useState} from 'react';

import { Grid } from 'semantic-ui-react';
import HeaderNavigation from '../../components/header-navigation/HeaderNavigation';
import Button from '../../components/ui/button/Button.js';
import Table from '../../components/ui/table/Table.js';
import classes from './Home.module.css';


const initialState = {
    

};
const Home = (props) => {
    const temporaryHeader = '2019年12月23日～2019年12月27日';
    const [initialState, setState] = useState({
        currentWeekGoal: '前向きに取り組む',
        currentWeekAnalysis: '落ち込まずに過ごせた ',
        nextWeekGoal: '単体テスト',
        weekData: [
            {
                key: '2019-12-23', date: '12月23日', day: '月', details: '打ち合わせで、しっかり発言できた。 ', satisfactionLevel: 'smile'
            },
            {
                key: '2019-12-24', date: '12月24日', day: '火', details: '資料作りを繰り上げて終わらせた ', satisfactionLevel: 'meh'
            },
            {
                key: '2019-12-25', date: '12月25日', day: '水', details: 'Aさんと仕事の段取りについて話し合えた 「前処理大全」を読み終えた。 ', satisfactionLevel: 'frown'
            },
            {
                key: '2019-12-26', date: '12月26日', day: '木', details: '昼御飯のメニューを決める時に、力口リ ーを考慮した。 ', satisfactionLevel: 'smile'
            },
            {
                key: '2019-12-27', date: '12月27日', day: '金', details: '二日酔いの不機嫌さを表に出さなかっ た。 ', satisfactionLevel: 'smile'
            }
        ]
    })
    return (
        <>
            <HeaderNavigation 
             info='/info'
             chart='/chart-view-daily'
             settings='/settings'/>
            <div className='Container'>
                <div style={{textAlign : 'center', marginBottom: '10px'}}> 
                    <h4>{temporaryHeader}</h4>
                </div>
                <Grid centered columns={5}>
                    <Grid.Row className='HomeButtonGroup' >
                        <Grid.Column className='ButtonNotPadded' width={2}> <Button btnType='action' btnStyle='Main'> ≪ </Button> </Grid.Column>
                        <Grid.Column className='ButtonNotPadded'  width={3}> <Button btnType='action' btnStyle='Main'> 今週 </Button>  </Grid.Column>
                        <Grid.Column className='ButtonNotPadded'  width={2}> <Button btnType='action' btnStyle='Main'> ≫ </Button>  </Grid.Column>
                        <Grid.Column className='ButtonNotPadded'  width={3}> <Button btnType='navigate' btnStyle='Main' path='/summary-list'> 一覧 </Button>  </Grid.Column>
                        <Grid.Column className='ButtonNotPadded'  width={5}> <Button btnType='navigate' btnStyle='Main' path='/calendar'> カレンダー </Button>  </Grid.Column>
                    </Grid.Row>
                </Grid>
                
                <Table
                    currentWeekGoal={initialState.currentWeekGoal}
                    currentWeekAnalysis={initialState.currentWeekAnalysis}
                    weekData={initialState.weekData}
                    nextWeekGoal={initialState.nextWeekGoal} />
            </div>
        </>
    )

}

export default Home;