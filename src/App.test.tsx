import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

// test case to check iof the text Built by Copilot is present in the app
test('renders Built by Copilot', () => {
  render(<App />);
  const linkElement = screen.getByText(/Built by Copilot/i);
  expect(linkElement).toBeInTheDocument();
});

// test case to type in the input field and check if the debounced value is displayed
test('type in the input field and check if the debounced value is displayed', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(
    'Type something...',
  ) as HTMLInputElement;
  input.focus();
  input.value = 'hello';
  const debouncedValue = screen.getByText('Debounced value: hello');
  expect(debouncedValue).toBeInTheDocument();
});
