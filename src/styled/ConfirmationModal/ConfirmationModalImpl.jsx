import styled from "styled-components";
import PropTypes from 'prop-types';
import React from "react";

// These styled components are private
const Model = styled.div`
    z-index: auto;
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;

const Container = styled.div` 
    position:fixed;
    background: skyblue;
    width: 33%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border-radius: 10px;
    padding: 0.75rem;
    color: rgba(0,0,139, 0.7);
`;

const Button = styled.button`
    background-color: ${({primary}) => (primary ? 'orange' : 'lightgray')};
    color: ${({primary}) => (primary ? 'white' : 'black')};
    border: solid 2px #9f7500;
    border-radius: 8px;
    width: 5.0rem;
    padding: 0.2rem;
    margin: 0.2rem;
`;

const Header = styled.div`
    font-size: calc(9px + 2vmin);
    color: rgba(0,0,139, 0.7);;
`;

const HBar = styled.div`
    width: 100%;
    height: 1px;
    border: solid 1px rgba(80,80,150, 0.4);
    background-color: rgba(80,80,150, 0.4);
`;

const ButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    justify-content: flex-end;
`;

const Slot = styled.div`
    font-size: medium;
    color: inherit;
`;

export default function ConfirmationModalImpl(props) {
    const {
        handleClose, // renderProp fn returns true or false
        show, // boolean - visible/invisible
        headerText, // text
        detailText // html / inner text
    } = {...props};

    const sendYes = () => handleClose(true);

    const sendNo = () => handleClose(false);

    return (
        <Model show={show}>
            <Container>
                <Header>{headerText}</Header>
                <HBar/>
                <Slot>{detailText}</Slot>
                <ButtonBar>
                    <Button onClick={sendYes} primary={true}>Yes</Button>
                    <Button onClick={sendNo} primary={false}>No</Button>
                </ButtonBar>
            </Container>
        </Model>
    );
}

ConfirmationModalImpl.defaultProps = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    headerText: PropTypes.string.isRequired,
    detailText: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]).isRequired
}
