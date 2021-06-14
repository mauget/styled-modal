import React, {useState} from 'react';
import styled from "styled-components";
import ConfirmationModal from './ConfirmationModal';
import * as Pos from './ConfirmationModal';
import Counter from "./Counter";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: dimgray;
  min-height: 100vh;
  font-size: 2.0rem;
  color: white;
`;

const StyledPane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: left;
  margin: 4rem;
  width: 50%;
`;

const StyledHeader = styled.h2`
    color: orange;
`;

const StyledAppButton = styled.button`
  background-color: orange;
  color: white;
  border: solid 2px #9f7500;
  border-radius: 8px;
  width: 20rem;
  padding: 0.2rem;
  margin: 0.2rem;
  font-size: 1.6rem;
`;

function App() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    };

    const actOnModalResult = (arg) => {
        console.warn(`Modal result: ${arg}`);
        if (arg) {
            setCount((prevCount) => prevCount + 1);
        }
    }
    const hideModal = (arg) => {
        setShow(false);
        actOnModalResult(arg);
    };

    return (
        <>
            <StyledApp>
                <StyledPane>
                    <StyledHeader>An App</StyledHeader>
                    <Counter labelText="Count" numericValue={count}/>
                    <StyledAppButton type="button" onClick={showModal}>Increment counter</StyledAppButton>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </div>
                </StyledPane>
            </StyledApp>
            <ConfirmationModal
                show={show}
                headerText="Confirmation"
                handleClose={hideModal}
                openPos={Pos.CM_CENTER_CENTER}>
                {`Increment count "${count}"?`}
            </ConfirmationModal>
        </>
    );
}

export default App;
