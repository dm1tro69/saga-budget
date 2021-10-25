import React from 'react';
import {Button, Modal} from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({isOpen, setIsOpen, value, isExpense, description, setDescription, setIsExpense, setValue, addEntry}) => {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
               <EntryForm
                   description={description}
                   value={value}
                   setDescription={setDescription}
                   isExpense={isExpense}
                   setValue={setValue}
                   setIsExpense={setIsExpense}
               />

            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    );
};

export default ModalEdit;
