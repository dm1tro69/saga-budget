import React from 'react';
import {Button} from "semantic-ui-react";

const ButtonSaveOrCancel = ({addEntry, value, description, isExpense}) => {
    return (
        <>
            <Button.Group style={{marginTop: 20}}>
                <Button>Cancel</Button>
                <Button.Or/>
                <Button onClick={() => addEntry(description, value, isExpense)} primary>Ok</Button>
            </Button.Group>
        </>
    );
};

export default ButtonSaveOrCancel;
