import { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const KEY_NAME_ESC = 'Escape';

function useEscapeKey(handleClose) {
    const handleEscKey = useCallback((event) => {
        if (event.key === KEY_NAME_ESC) {
            handleClose();
        }
    },[handleClose]);

    useEffect(() => {
        const keyEvent = 'keyup';
        document.addEventListener(keyEvent, handleEscKey, false);

        return () => {
            document.removeEventListener(keyEvent, handleEscKey, false);
        };
    }, [handleEscKey]);
}

useEscapeKey.proptypes = {
    handleClose: PropTypes.func.isRequired,
}
export default useEscapeKey;
