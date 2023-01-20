import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Modal from './Modal';

test('Modal should open and close when the open and close buttons are clicked', () => {
  const { getByText, queryByText } = render(<Modal textOpen="Open" />);
  const openButton = getByText(/open/i);
  let modalContent = queryByText(/modal content/i);
  

  expect(modalContent).not.toBeInTheDocument();

  fireEvent.click(openButton);
  modalContent = queryByText(/modal content/i);
  const close = getByText(/close/i);

  expect(modalContent).toBeInTheDocument();

  

  fireEvent.click(close);

  expect(modalContent).not.toBeInTheDocument();
});
