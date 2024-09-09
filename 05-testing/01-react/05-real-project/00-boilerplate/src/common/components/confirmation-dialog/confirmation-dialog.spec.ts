import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('ConfirmationDialogComponent', () => {
  const defaultProps = {
    title: 'Test Title',
    content: 'Test Content',
    labels: {
      closeButton: 'Close',
      acceptButton: 'Accept',
    },
    children: '',
    isOpen: false,
    onAccept: jest.fn(),
    onClose: jest.fn(),
  };

  it('should render the dialog with the correct title and content', () => {
    // Arrange
    const props = {
      ...defaultProps,
    };

    // Act
    render(ConfirmationDialogComponent({ ...props }));

    const buttonElement = screen.getByRole('button', {
      name: /Acept/i,
    });

    // Assert
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should call onAccept and onClose when the accept button is clicked', () => {
    // Arrange
    const { getByText } = render(
      ConfirmationDialogComponent({ ...defaultProps })
    );
    const acceptButton = getByText('Accept');

    // Act
    fireEvent.click(acceptButton);

    // Assert
    expect(defaultProps.onAccept).toHaveBeenCalled();
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it('should call onClose when the close button is clicked', () => {
    // Arrange
    const { getByText } = render(
      ConfirmationDialogComponent({ ...defaultProps })
    );
    const closeButton = getByText('Close');

    // Act
    fireEvent.click(closeButton);

    // Assert
    expect(defaultProps.onClose).toHaveBeenCalled();
  });
});
