import React, {useState} from 'react';
import './App.css';
import {ConfirmationBox} from "./styled/ConfirmationBox";

function App() {
    const [show, setShow] = useState(false);
    const strikeName = 'strike one';
    const showModal = () => {
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
    };

    return (
        <>
            <div className="App">
                <p>This is main panel stuff. This is main panel stuff. This
                    is main panel stuff. This is main panel stuff. This is
                    main panel stuff. This is main panel stuff. This is main
                    panel stuff. This is main panel stuff.</p>
                <button type="button" onClick={showModal}>
                    Open modal
                </button>
            </div>
            <ConfirmationBox show={show} headerText="Confirm delete strike" handleClose={hideModal}>
                {`Delete strike "${strikeName}"? This cannot be undone.`}
            </ConfirmationBox>
        </>
    );
}

export default App;
