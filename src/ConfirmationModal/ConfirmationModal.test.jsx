import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ConfirmationModal from "./index";

describe('ConfirmationModal', ()=>{
    const mockHandleClose = jest.fn();

    beforeEach(()=>{
        jest.clearAllMocks();
    });

    it('should render', ()=>{
        render(<ConfirmationModal handleClose={mockHandleClose} show={false} />);
        expect(screen.getByText(/Confirmation/i)).toBeTruthy();
    });

    it('should handle a no click', ()=>{
        render(<ConfirmationModal handleClose={mockHandleClose} show={true} />);
        const buttonNo = screen.getByText(/no/i);
        expect(buttonNo).toBeTruthy();

        expect(mockHandleClose).toHaveBeenCalledTimes(0);
        fireEvent.click(buttonNo);
        expect(mockHandleClose).toHaveBeenCalledTimes(1);
    });

    it('should handle a yes click', ()=>{
        render(<ConfirmationModal handleClose={mockHandleClose} show={true} />);
        const buttonNo = screen.getByText(/yes/i);
        expect(buttonNo).toBeTruthy();

        expect(mockHandleClose).toHaveBeenCalledTimes(0);
        fireEvent.click(buttonNo);
        expect(mockHandleClose).toHaveBeenCalledTimes(1);
    });

});
