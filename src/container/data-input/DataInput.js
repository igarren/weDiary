import React from 'react';
import classes from './DataInput.module.css';
import SubHeader from '../../components/header-navigation/sub-header/SubHeader';
import TextArea from '../../components/ui/text-area/TextArea';

let action = '';

const dataInput = (props) => {
    let header = '';
    let label = '';
    let placeholder = '';
    let textArea = '';

    const temporaryHeader = '2019年12月23日～2019年12月27日';


    switch (props.match.params['action']) {
        case 'current-week':
            header = '今週の目標入力';
            label = '今週の目標・やりたいこと'
            placeholder = '今週の目標入力';
            action = 'CURRENT_WEEK';
            textArea = props.currentWeekGoal;
            break;
        case 'current-analysis':
            header = 'ふりかえり入力';
            label = 'ふりかえり';
            placeholder = 'ふりかえり入力';
            action = 'CURRENT_ANALYSIS';
            textArea = props.currentWeekAnalysis
            break;
        case 'next-week':
            header = '来週の目標入力';
            label = '来週の目標・やりたいこと'
            placeholder = '来週の目標入力';
            action = 'NEXT_WEEK';
            textArea = props.nextWeekGoal
            break;
    }


    return (
        <>
            <SubHeader header={header} />
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <h4>{temporaryHeader}</h4>
            </div>
            <div className='Container'>
                <TextArea label={label} placeholder={placeholder} value={textArea} />
            </div>
        </>
    )
};

export default dataInput;