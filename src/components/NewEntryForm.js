import React from 'react';
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";

const NewEntryForm = ({addEntry, value, isExpense, setIsExpense, setValue, description, setDescription}) => {



    return (
        <>
            <Form unstackable>
                 <EntryForm
                     description={description}
                     value={value}
                     setDescription={setDescription}
                     isExpense={isExpense}
                     setValue={setValue}
                     setIsExpense={setIsExpense}
                 />
                <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense}/>
            </Form>
        </>
    );
};

export default NewEntryForm;

