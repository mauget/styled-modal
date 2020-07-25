import React from 'react';
import Modal from "./Modal";

export default function ConfirmationModal(props) {
    const {
        handleClose, // renderProp
        show, // boolean
        headerText, // text
        children, // html and text
    } = {...props};
    return (
        <Modal
            handleClose={handleClose}
            show={show}
            headerText={headerText}
            children={children}
        />
    );
}
