import React from 'react';
import '@testing-library/jest-dom';
import { act, render, screen, waitFor } from '@testing-library/react';
import App, { calculateDaysBetweenTwoDates, validateEmail } from './App';
import '@testing-library/jest-dom';

// test case to check if the text Built by Copilot is present in the app
test('renders Built by Copilot', () => {
  render(<App />);
  const linkElement = screen.getByText(/Built by Copilot/i);
  expect(linkElement).toBeInTheDocument();
});

// test case to type in the input field and check if the debounced value is displayed
test('type in the input field and check if the debounced value is displayed', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(
    'Type something...',
  ) as HTMLInputElement;
  input.focus();
  // fire events to type in the input field
  act(() => {
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'h' }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'e' }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'l' }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'l' }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'o' }));
  });

  setTimeout(() => {
    expect(screen.getByText('Debounced value: hello')).toBeInTheDocument();
  }, 2000);
});

// write a negative test case for above test case
test('type in the input field and check if the debounced value is displayed', async () => {
  render(<App />);
  const input = screen.getByPlaceholderText(
    'Type something...',
  ) as HTMLInputElement;
  input.focus();
  // fire events to type in the input field
  act(() => {
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'h' }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'e' }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'l' }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'l' }));
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'o' }));
  });

  setTimeout(() => {
    expect(screen.getByText('Debounced value: hello')).not.toBeInTheDocument();
  }, 1000);
});
// ...

// test case for calculateDaysBetweenTwoDates function
test('calculateDaysBetweenTwoDates', () => {
  const date1 = '2022-01-01';
  const date2 = '2022-01-10';
  const expectedDays = 9;

  const result = calculateDaysBetweenTwoDates(date1, date2);

  expect(result).toBe(expectedDays);
});

// negative test case for calculateDaysBetweenTwoDates function
test('calculateDaysBetweenTwoDates', () => {
  const date1 = '2022-01-01';
  const date2 = '2022-01-10';
  const expectedDays = 10;

  const result = calculateDaysBetweenTwoDates(date1, date2);

  expect(result).not.toBe(expectedDays);
});

// test case for calculateDaysBetweenTwoDates function with invalid input
test('calculateDaysBetweenTwoDates with invalid input', () => {
  const date1 = 'invalid-date';
  const date2 = 'invalid-date';
  const expectedDays = NaN;

  const result = calculateDaysBetweenTwoDates(date1, date2);

  expect(result).toBe(expectedDays);
});

(global.fetch as jest.Mock) = jest.fn(
  () =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            title: 'React is awesome',
            body: 'React is a JavaScript library for building user interfaces',
          },
          {
            title: 'React is not awesome',
            body: 'React is not a full-fledged framework and requires the use of additional libraries for state management, routing, and certain other features',
          },
          {
            title: 'React is the best',
            body: 'React is the best library for building user interfaces',
          },
        ]),
    }) as Promise<Response>,
);

// test case to mock the fetchPosts function and check if the posts are rendered
test('mock the fetchPosts function and check if the posts are rendered', async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText('React is awesome')).toBeInTheDocument();
    expect(screen.getByText('React is not awesome')).toBeInTheDocument();
    expect(screen.getByText('React is the best')).toBeInTheDocument();
    // expect a text like ERROR: to not be present in the document
    expect(screen.queryByText(/ERROR:/i)).not.toBeInTheDocument();
  });
});

// test case where the fetch returns a rejected promise
test('fetch returns a rejected promise', async () => {
  (global.fetch as jest.Mock) = jest.fn(() => Promise.reject('error'));
  render(<App />);
  await waitFor(() => {
    // expect a text like ERROR: to be present in the document
    expect(screen.getByText(/ERROR:/i)).toBeInTheDocument();
  });
});
// ...

// test case for validateEmail function with a valid email
test('validateEmail with a valid email', () => {
  const email = 'test@example.com';
  const isValid = validateEmail(email);
  expect(isValid).toBe(true);
});

// test case for validateEmail function with an invalid email
test('validateEmail with an invalid email', () => {
  const email = 'invalid_email';
  const isValid = validateEmail(email);
  expect(isValid).toBe(false);
});

// ...
