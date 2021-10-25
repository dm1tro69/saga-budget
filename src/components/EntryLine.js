import React from 'react';
import {Grid, Icon, Segment} from "semantic-ui-react";

const EntryLine = ({editEntry, deleteEntry, entry:{id, description, value, isExpense= false}}) => {



    return (
        <>
            <Segment color={isExpense? 'red': 'green'}>
                <Grid columns={3} textAlign={'right'}>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign={'left'}>{description}</Grid.Column>
                        <Grid.Column width={3} textAlign={'right'}>{value}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon onClick={() => editEntry(id)} name="edit" bordered/>
                            <Icon onClick={() => deleteEntry(id)} name="trash" bordered/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

        </>
    );
};

export default EntryLine;
