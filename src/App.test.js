import { render, screen } from '@testing-library/react';
import App from './App';

test('renders link to facebook page', () => {
  render(<App />);
  const linkElement = screen.getByText(/visit our page/i);
  expect(linkElement).toBeInTheDocument();
});

