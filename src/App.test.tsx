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
