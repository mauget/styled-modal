import {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';

const KEY_NAME_ESC = 'Escape';
const KEY_EVENT_TYPE = 'keyup';

function useEscapeKey(handleClose) {
    const handleEscKey = useCallback((event) => {
        if (event.key === KEY_NAME_ESC) {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);

        return () => {
            document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
        };
    }, [handleEscKey]);
}

useEscapeKey.proptypes = {
    handleClose: PropTypes.func.isRequired,
}
export default useEscapeKey;
