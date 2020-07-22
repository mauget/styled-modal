import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledCounter = styled.div`
  display: flex;
`;

const StyledLabel = styled.div`
  margin: 0.2rem;
`;

const StyledValue = styled.div`
  margin: 0.2rem;
`;

export default function Counter({ labelText, numericValue }) {
    return (
        <StyledCounter>
            <StyledLabel>{ labelText }</StyledLabel>
            <StyledValue data-testid="value-field">{ numericValue }</StyledValue>
        </StyledCounter>
    );
};
Counter.propTypes = {
    labelText: PropTypes.string,
    numberValue: PropTypes.number,
};
Counter.defaultProps = {
    labelText: 'Count',
    numberValue: 0,
};
