import React from 'react';
import PropTypes from 'prop-types';
import ConfirmationModalImpl from "./ConfirmationModalImpl";

// These are the only possible openPos values
export const CM_CENTER_CENTER = Symbol('CM_CENTER_CENTER');
export const CM_TOP_LEFT = Symbol('CM_TOP_LEFT');
export const CM_TOP_CENTER = Symbol('CM_TOP_CENTER');
export const CM_TOP_RIGHT = Symbol('CM_TOP_RIGHT');

export default function ConfirmationModal(props) {
    const {
        handleClose, // renderProp
        show, // boolean
        headerText, // text
        children,  // html or text
        openPos
    } = {...props};

    return (
        <ConfirmationModalImpl
            handleClose={handleClose}
            show={show}
            headerText={headerText}
            detailText={children}
            openPos={openPos}
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
    ]),
    openPos: PropTypes.oneOf([
        CM_CENTER_CENTER,
        CM_TOP_LEFT,
        CM_TOP_CENTER,
        CM_TOP_RIGHT
    ])
}

ConfirmationModal.defaultProps = {
    headerText: 'Confirmation',
    detailText: 'Proceed?',
    openPos: CM_CENTER_CENTER
}
