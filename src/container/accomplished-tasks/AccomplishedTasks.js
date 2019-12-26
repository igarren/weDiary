
import React from 'react';
import SubHeader from '../../components/header-navigation/sub-header/SubHeader';
import TextArea from '../../components/ui/text-area/TextArea';
import classes from './AccomplishedTasks.module.css';
import Questionnaire from '../../components/questionnaire/Questionnaire';

const accomplishedTasks = (props) => {


    return (
        <>
            <SubHeader header='できたこと入力' />
            <div className='Container'>
                <TextArea label='今日できたこと' placeholder='' changed={props.onChangeValue} />
                <Questionnaire labelType = 'Blue' label = '仕事をして精力的になるのを感じた' />
                <Questionnaire labelType = 'Blue' label = '「仕事に行きたい」という気持ちになった' />
                <Questionnaire labelType = 'Yellow' label = '今日の仕事は、私に活力を与えてくれた' />
                <Questionnaire labelType = 'Yellow' label = '今日行った仕事に誇りを感じている' />
                
            </div>

        </>

    )

}


export default accomplishedTasks;