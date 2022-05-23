import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import {isDOMComponent} from "react-dom/test-utils";
import UseEscapeKey from "./useEscapeKey";

describe('useEscapeKey', () => {
    const mockHandleClose = jest.fn();

    function UseEscapeExample() {
        UseEscapeKey(mockHandleClose);

        const style = {display: 'flex', flexDirection: 'column'};

        return (
            <div style={style}>
                <div>TOP outside</div>
                <div>INSIDE area</div>
                <div>BOTTOM outside</div>
            </div>
        );
    }

    const escEvent = {
            key: 'Escape',
            bubbles: true,
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render all areas', () => {
        render(<UseEscapeExample/>);
        expect(screen.getByText(/TOP outside/i)).toBeTruthy();
        expect(screen.getByText(/INSIDE area/i)).toBeTruthy();
        expect(screen.getByText(/BOTTOM outside/i)).toBeTruthy();
    });

    it('should handle ESC on TOP outside', () => {
        render(<UseEscapeExample/>);
        const topOutside = screen.getByText(/TOP outside/i);

        expect(topOutside).toBeTruthy();
        expect(isDOMComponent(topOutside)).toBeTruthy();

        expect(mockHandleClose).toHaveBeenCalledTimes(0);
        fireEvent.keyUp(topOutside, escEvent);
        expect(mockHandleClose).toHaveBeenCalledTimes(1);
    });

    it('should handle ESC on BOTTOM outside', () => {
        render(<UseEscapeExample/>);
        const bottomOutside = screen.getByText(/BOTTOM outside/i);

        expect(bottomOutside).toBeTruthy();
        expect(isDOMComponent(bottomOutside)).toBeTruthy();

        expect(mockHandleClose).toHaveBeenCalledTimes(0);

        fireEvent.keyUp(bottomOutside, escEvent);
        expect(mockHandleClose).toHaveBeenCalledTimes(1);
    });

    it('should handle ESC on INSIDE area', () => {
        render(<UseEscapeExample/>);
        const inside = screen.getByText(/INSIDE area/i);

        expect(inside).toBeTruthy();
        expect(isDOMComponent(inside)).toBeTruthy();

        expect(mockHandleClose).toHaveBeenCalledTimes(0);

        fireEvent.keyUp(inside, escEvent);
        expect(mockHandleClose).toHaveBeenCalledTimes(1);
    });

    it('should NOT handle non-ESAC key', () => {
        const escEvent = {
            key: 'a',
            bubbles: true,
        };

        render(<UseEscapeExample/>);
        const inside = screen.getByText(/INSIDE area/i);

        expect(inside).toBeTruthy();
        expect(isDOMComponent(inside)).toBeTruthy();

        expect(mockHandleClose).toHaveBeenCalledTimes(0);

        fireEvent.keyUp(inside, escEvent);
        expect(mockHandleClose).toHaveBeenCalledTimes(0);
    });

});
