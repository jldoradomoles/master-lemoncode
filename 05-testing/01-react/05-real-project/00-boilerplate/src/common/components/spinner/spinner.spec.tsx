import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SpinnerComponent } from './spinner.component';


describe('Spinner component', () => {
    test('should render without crashing', () => {
        render(<SpinnerComponent />);
        const spinnerElement = screen.getByTestId('spinner');
        expect(spinnerElement).toBeInTheDocument();
    });

    test('should have the correct class name', () => {
        render(<SpinnerComponent />);
        const spinnerElement = screen.getByTestId('spinner');
        expect(spinnerElement).toHaveClass('spinner');
    });

    test('should display loading text if provided', () => {
        const loadingText = 'Loading...';
        render(<SpinnerComponent  />);
        const textElement = screen.getByText(loadingText);
        expect(textElement).toBeInTheDocument();
    });

    test('should not display loading text if not provided', () => {
        render(<SpinnerComponent />);
        const textElement = screen.queryByText(/Loading.../i);
        expect(textElement).not.toBeInTheDocument();
    });
});