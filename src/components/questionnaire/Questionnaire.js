import React from 'react';
import { Grid } from 'semantic-ui-react';
import Button from '../ui/button/Button';
import classes from './Questionnaire.module.css';

const questionnaire = (props) => (
    <div className={classes.Questionnaire}>
        <p className={[classes.Label, classes[props.labelType]].join(' ')}>{props.label}</p>
        <Grid centered columns={7}>
            <Grid.Row className={classes.ButtonGroup}>
                <Grid.Column className={classes.Button}>  <Button btnType='action' btnStyle='Question'>1 <p> 全くあて<br />はまらない  </p> </Button>  </Grid.Column>
                <Grid.Column className={classes.Button}>  <Button btnType='action' btnStyle='Question'>2 <p> あまりあて<br />はまらない </p> </Button> </Grid.Column>
                <Grid.Column className={classes.Button}>  <Button btnType='action' btnStyle='Question'>3 <p> やや<br />あてはまる  </p></Button> </Grid.Column>
                <Grid.Column className={classes.Button}>  <Button btnType='action' btnStyle='Question'>4<p> まあまあ<br />あてはまる  </p></Button> </Grid.Column>
                <Grid.Column className={classes.Button}>  <Button btnType='action' btnStyle='Question'>5<p>　 <br />あてはまる</p></Button> </Grid.Column>
                <Grid.Column className={classes.Button}>  <Button btnType='action' btnStyle='Question'>6<p> よく<br />はまらない  </p></Button> </Grid.Column>
                <Grid.Column className={classes.Button}>  <Button btnType='action' btnStyle='Question'>7<p>非常によく<br />はまらない  </p></Button> </Grid.Column>


            </Grid.Row>
        </Grid>

    </div>
);


export default questionnaire;