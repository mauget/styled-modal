import React, {useState} from 'react';
import './App.css';
import ConfirmationModal from './styled/ConfirmationModal';

function handleMainClick() {
    window.alert('Clicked main panel item');
}

function actOnModalResult(arg){
    console.warn(`Modal result: ${arg}`);
}

function App() {
    const [show, setShow] = useState(false);
    const itemName = 'item one';
    const showModal = () => {
        setShow(true);
    };

    const hideModal = (arg) => {
        actOnModalResult(arg);
        setShow(false);
    };

    return (
        <>
            <div className="App">
                <p><span style={{color: 'blue', cursor: 'pointer'}} onClick={handleMainClick}>This</span>
                    is main panel stuff. This is main panel stuff. This
                    is main panel stuff. This is main panel stuff. This is
                    main panel stuff. This is main panel stuff. This is main
                    panel stuff. This is main panel stuff.</p>
                <button type="button" onClick={showModal}>
                    Open modal
                </button>
            </div>
            <ConfirmationModal show={show} headerText="Confirm delete item?" handleClose={hideModal}>
                {`Delete "${itemName}"? This cannot be undone.`}
            </ConfirmationModal>
        </>
    );
}

export default App;
