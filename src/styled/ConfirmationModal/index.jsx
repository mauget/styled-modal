import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationModalImpl from "./ConfirmationModalImpl";

export default function ConfirmationModal(props) {
    const {
        handleClose, // renderProp
        show, // boolean
        headerText, // text
        children // html or text
    } = {...props};
    return (
        <ConfirmationModalImpl
            handleClose={handleClose}
            show={show}
            headerText={headerText}
            detailText={children}
        />
    );
}

ConfirmationModal.defaultProps = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    headerText: PropTypes.string,
    detailText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
}

ConfirmationModal.defaultProps = {
    headerText: 'Confirmation',
    detailText: 'Proceed?'
}
