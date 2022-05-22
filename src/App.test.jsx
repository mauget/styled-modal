import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.jsx', () => {
    it('renders the body text', () => {
        render(<App/>);
        expect(screen.getByText(/An App/i)).toBeTruthy();
        expect(screen.getByText(/lorem ipsum/i)).toBeTruthy();
    });

    it('renders the increment button', () => {
        render(<App/>);
        expect(screen.getByRole('button')).toHaveTextContent(/Increment counter/i);
    });
})
