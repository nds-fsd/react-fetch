import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('Counter should increment and decrement the count when the + and - buttons are clicked', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText(/\+/i);
  const decrementButton = getByText(/-/i);
  const countDisplay = getByText(/count: 0/i);

  fireEvent.click(incrementButton);

  expect(countDisplay).toHaveTextContent(/count: 1/i);

  fireEvent.click(decrementButton);

  expect(countDisplay).toHaveTextContent(/count: 0/i);
});