import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link to facebook page', () => {
  render(<App />);
  const linkElement = screen.getByText(/visit our facebook page/i);
  expect(linkElement).toBeInTheDocument();
});

test('shows building text', () => {
  render(<App />);
  const linkElement = screen.getByText(/under construction/i);
  expect(linkElement).toBeInTheDocument();
});

