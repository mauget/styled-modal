import React from 'react';
import styled from 'styled-components';

const StyledModel = styled.div`
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
`;

const StyledModelContainer = styled.div`
    position:fixed;
    background: skyblue;
    width: 33%;
    height: auto;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    border: solid lightskyblue 2px;
    border-radius: 10px;
    padding: 0.75rem;
    color: rgba(0,0,139, 0.7);
`;

const StyledButton = styled.button`
    background-color: ${({primary}) => (primary ? 'orange' : 'lightgray')};
    color: ${({primary}) => (primary ? 'white' : 'black')};
    border: solid 2px #9f7500;
    border-radius: 5px;
    width: 5.0rem;
    margin: 0.2rem;
`;

const StyledHeader = styled.div`
    font-size: calc(9px + 2vmin);
    color: rgba(0,0,139, 0.7);;
`;

const HBar = styled.div`
    width: 100%;
    height: 1px;
    border: solid 1px rgba(80,80,150, 0.4);
`;

export function ConfirmationBox(
    {
        handleClose, // renderProp
        show, // boolean
        headerText, // text
        children, // html and text
    }) {

    return (
        <StyledModel show={show}>
            <StyledModelContainer>
                <StyledHeader>{headerText}</StyledHeader>
                <HBar />
                <div>{children}</div>
                <StyledButton onClick={handleClose} primary={true}>Yes</StyledButton>
                <StyledButton onClick={handleClose} primary={false}>No</StyledButton>
            </StyledModelContainer>
        </StyledModel>
    );
}
