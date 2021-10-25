import React from 'react';
import {Checkbox, Form, Segment} from "semantic-ui-react";

const EntryForm = ({description, value, isExpense, setDescription, setValue, setIsExpense}) => {
    return (
        <>
            <Form.Group width={3}>
                <Form.Input
                    icon={'tags'}
                    width={12}
                    label={'Description'}
                    placeholder="New shinny thing"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Input
                    icon={'dollar'}
                    width={4}
                    label={'Value'}
                    placeholder="100.00"
                    iconPosition={'left'}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    label={'is expense'}
                    checked={isExpense}
                    onChange={() => setIsExpense(prevState => !prevState)}
                />
            </Segment>
        </>
    );
};

export default EntryForm;
