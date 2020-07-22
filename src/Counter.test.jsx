import React from 'react';
import { render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
    it('renders the initial count', () => {
        render(<Counter/>);
        expect(screen.getByTestId('value-field')).toBeTruthy();
    });


    it('renders the counter element', () => {
        render(<Counter/>);
        expect(screen.getByText('Count')).toBeTruthy();
    });
})
