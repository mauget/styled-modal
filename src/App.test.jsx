import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {isDOMComponent} from "react-dom/test-utils";

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

    it('should increment the count when modal "Yes" clicked', () => {
        render(<App/>);
        const openModalButton = screen.getByText(/Increment counter/i);
        expect(isDOMComponent(openModalButton)).toBeTruthy();

        fireEvent.click(openModalButton);
        const buttonYes = screen.getByText(/yes/i);
        expect(buttonYes).toBeTruthy();

        let countValueDiv = screen.getByTestId(/value-field/i);
        expect(isDOMComponent(countValueDiv)).toBeTruthy();
        expect(countValueDiv).toHaveTextContent('0');

        fireEvent.click(buttonYes);
        expect(countValueDiv).toHaveTextContent('1');
    });

    it('should NOT increment the count when modal "No" clicked', () => {
        render(<App/>);
        const openModalButton = screen.getByText(/Increment counter/i);
        expect(isDOMComponent(openModalButton)).toBeTruthy();

        fireEvent.click(openModalButton);
        const buttonNo = screen.getByText('No');
        expect(buttonNo).toBeTruthy();

        let countValueDiv = screen.getByTestId(/value-field/i);
        expect(isDOMComponent(countValueDiv)).toBeTruthy();
        expect(countValueDiv).toHaveTextContent('0');

        fireEvent.click(buttonNo);
        expect(countValueDiv).toHaveTextContent('0');
    });
})
