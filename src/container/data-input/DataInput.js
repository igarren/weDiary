import React from 'react';
import classes from './DataInput.module.css';
import {connect} from 'react-redux';
import SubHeader from '../../components/header-navigation/sub-header/SubHeader';
import TextArea from '../../components/ui/text-area/TextArea';

let action = '';

const dataInput = (props) => {
    let header = '';
    let label = '';
    let placeholder = '';
    let textArea = '';

  

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
            header = 'ふりかえり';
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
            <div className={classes.DataInput}>
                <TextArea label={label} placeholder={placeholder} changed={props.onChangeValue} value={textArea}  />
            </div>
        </>
    )
};


const mapStateToProps = state => {
    return {
        currentWeekGoal: state.currentWeekGoal,
        currentWeekAnalysis: state.currentWeekAnalysis,
        nextWeekGoal : state.nextWeekGoal
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onChangeValue : (event) => dispatch({ type: action, value: event.target.value}),
    }
};




export default connect(mapStateToProps, mapDispatchToProps)(dataInput);