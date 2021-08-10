import { render, screen } from '@testing-library/react';
import '../node_modules/bootstrap/js/src/dropdown.js';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
