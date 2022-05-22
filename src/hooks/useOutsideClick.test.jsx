import React, { useRef } from 'react';
import { screen, render, fireEvent } from "@testing-library/react";
import useOutsideClick from './useOutsideClick';
import { isDOMComponent } from "react-dom/test-utils";

const mockHandleClose = jest.fn();

function UseOutsideClickExample() {
    const ref = useRef(null);
    useOutsideClick(mockHandleClose, ref);

    const style = {display: 'flex', flexDirection: 'column'};

    return (
        <div style={style}>
            <div>TOP outside</div>
            <div ref={ref}>INSIDE area</div>
            <div>BOTTOM outside</div>
        </div>
    );
}

describe('useOutsideClick', () => {
    beforeEach(() => {
        jest.clearAllMocks();

    });

    it('should render all areas', () => {
        render(<UseOutsideClickExample/>);
        expect(screen.getByText(/TOP outside/i)).toBeTruthy();
        expect(screen.getByText(/INSIDE area/i)).toBeTruthy();
        expect(screen.getByText(/BOTTOM outside/i)).toBeTruthy();
    });

    it('should handle click TOP outside', () => {
            render(<UseOutsideClickExample/>);
        const topOutside = screen.getByText(/TOP outside/i);

        expect(topOutside).toBeTruthy();
        expect(isDOMComponent(topOutside)).toBeTruthy();

        expect(mockHandleClose).toHaveBeenCalledTimes(0);
        fireEvent.click(topOutside);
        setTimeout(()=>{
            expect(mockHandleClose).toHaveBeenCalledTimes(1);
        }, 0);
    });

    it('should handle click BOTTOM outside', () => {
        render(<UseOutsideClickExample/>);
        const bottomOutside = screen.getByText(/BOTTOM outside/i);

        expect(bottomOutside).toBeTruthy();
        expect(isDOMComponent(bottomOutside)).toBeTruthy();

        expect(mockHandleClose).toHaveBeenCalledTimes(0);
        fireEvent.click(bottomOutside);
        setTimeout(()=>{
            expect(mockHandleClose).toHaveBeenCalledTimes(1);
        }, 0);

        fireEvent.click(bottomOutside);
        setTimeout(()=>{
            expect(mockHandleClose).toHaveBeenCalledTimes(2);
        }, 0);
    });

    it('should ignore click INSIDE area', () => {
        render(<UseOutsideClickExample/>);

        const insideArea = screen.getByText('INSIDE area');
        expect(insideArea).toBeTruthy();
        expect(isDOMComponent(insideArea)).toBeTruthy();

        expect(mockHandleClose).toHaveBeenCalledTimes(0);
        fireEvent.click(insideArea);
        setTimeout(()=>{
            expect(mockHandleClose).toHaveBeenCalledTimes(1);
        }, 0);
    });
});
