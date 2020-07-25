import styled from "styled-components";
import React from "react";

const StyledModel = styled.div`
    z-index: auto;
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
`;

const StyledContainer = styled.div` 
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
    border-radius: 8px;
    width: 5.0rem;
    padding: 0.2rem;
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

const StyledButtonBar = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 0 auto;
    //align-items: flex-end;
    justify-content: flex-end;
`;

const Slot = styled.div`

`;

export default function Modal(props) {
    const {
        handleClose, // renderProp fn returns true or false
        show, // boolean - visible/invisible
        headerText, // text
        children // html / inner text
    } = {...props};

    const sendYes = () => handleClose(true);

    const sendNo = () => handleClose(false);

    return (
        <StyledModel show={show}>
            <StyledContainer>
                <StyledHeader>{headerText}</StyledHeader>
                <HBar/>
                <Slot>{children}</Slot>
                <StyledButtonBar>
                    <StyledButton onClick={sendYes} primary={true}>Yes</StyledButton>
                    <StyledButton onClick={sendNo} primary={false}>No</StyledButton>
                </StyledButtonBar>
            </StyledContainer>
        </StyledModel>
    );
}
