import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.jsx', () => {
    it('renders the body text', () => {
        render(<App/>);
        // eslint-disable-next-line no-restricted-globals
        expect(screen.getByText('This is main panel stuff.')).toBeTruthy();
    });


    it('renders the Open modal button', () => {
        render(<App/>);
        // eslint-disable-next-line no-restricted-globals
        expect(screen.getByRole('button')).toHaveTextContent('Open modal');
    });
})
