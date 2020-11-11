import React, {useState} from 'react';
import './App.css';
import ConfirmationModal from './styled/ConfirmationModal';
import * as Pos from  './styled/ConfirmationModal';

function handleMainClick() {
    window.alert('Clicked main panel item');
}

function actOnModalResult(arg) {
    console.warn(`Modal result: ${arg}`);
    if (arg){
        setTimeout(() => alert('Delete action placeholder'), 0);
    }
}

function App() {
    const [show, setShow] = useState(false);
    const itemName = 'item one';
    const showModal = () => {
        setShow(true);
    };

    const hideModal = (arg) => {
        setShow(false);
        actOnModalResult(arg);
    };

    return (
        <>
            <div className="App">
                <p><span style={{color: 'red', cursor: 'pointer'}}
                         onClick={handleMainClick}>This is main panel stuff.</span>
                    This is main panel stuff. This
                    is main panel stuff. This is main panel stuff. This is
                    main panel stuff. This is main panel stuff. This is main
                    panel stuff. This is main panel stuff.</p>
                <button type="button" onClick={showModal}>
                    Open modal
                </button>
            </div>
            <ConfirmationModal show={show} headerText="Confirm delete item?"
                               handleClose={hideModal} openPos={Pos.CM_TOP_CENTER}>
                {`Permanently delete "${itemName}"?`}
            </ConfirmationModal>
        </>
    );
}

export default App;
