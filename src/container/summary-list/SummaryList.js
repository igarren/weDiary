import React from 'react';
import { Grid } from 'semantic-ui-react';

import Table from '../../components/ui/table/Table';
import SubHeader from '../../components/header-navigation/sub-header/SubHeader';
import Button from '../../components/ui/button/Button';

import classes from './SummaryList.module.css';


const summaryList = (props) => {

    const sampleData = [
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

    return (
        <>
            <SubHeader header='できたこと一覧'/>
            <div className='Container'>
                <Grid centered columns={5}> 
                    <Grid.Row>
                        <Grid.Column className='ButtonNotPadded' width={2}> <Button btnType='action' btnStyle='Main'> ≪ </Button> </Grid.Column>
                        <Grid.Column className='ButtonNotPadded' width={3}> <Button btnType='action' btnStyle='Main'> 最新 </Button>  </Grid.Column>
                        <Grid.Column className='ButtonNotPadded' width={2}> <Button btnType='action' btnStyle='Main'> ≫ </Button>  </Grid.Column>
                        {/* <Grid.Column className='ButtonNotPadded'width={3}> <Button btnType='navigate' btnStyle='Main' path='/summary-list'> 一覧 </Button>  </Grid.Column> */}
                        {/* <Grid.Column className='ButtonNotPadded'width={5}> <Button btnType='navigate' btnStyle='Main' path='/calendar'> カレンダー </Button>  </Grid.Column> */}
                    </Grid.Row>
                </Grid>
                <Table weekData={sampleData} />

            </div>
        </>
    )
}


export default summaryList;