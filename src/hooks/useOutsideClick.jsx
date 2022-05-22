import {useCallback, useEffect} from "react";
import PropTypes from "prop-types";

const MOUSE_UP = 'mouseup';

function useOutsideClick(handleClose, ref) {
    const handleClick = useCallback((event) => {
        if (ref && !ref.current.contains(event.target)) {
            handleClose();
        }
    },[handleClose, ref]);

    useEffect(() => {
        document.addEventListener(MOUSE_UP, handleClick);

        return () => { document.removeEventListener(MOUSE_UP, handleClick); };
    }, [handleClick]);
    return { handleClose };
}

useOutsideClick.propTyoes = {
    handleClose: PropTypes.func.isRequired,
    ref: PropTypes.element.isRequired,
}
export default useOutsideClick;
