import React from 'react';
import {Grid, Segment} from "semantic-ui-react";
import DisplayBalance from "./DispalyBalance";

const DisplayBalances = ({expenseTotal, incomeTotal}) => {
    return (
        <>
            <Segment textAlign={'center'}>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <DisplayBalance value={incomeTotal} color={'green'} title={'Incoming:'} size={'tiny'}/>
                        </Grid.Column>
                        <Grid.Column>
                            <DisplayBalance value={expenseTotal} color={'red'} title={'Expenses:'} size={'tiny'}/>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </>
    );
};

export default DisplayBalances;
