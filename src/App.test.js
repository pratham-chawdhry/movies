import { render, screen } from '@testing-library/react';
import App from './App';

test('renders login page with sign in button', () => {
  window.history.pushState({}, 'Test Page', '/movies/');
  render(<App />);
  const signInButton = screen.getByText(/Sign In/i);
  expect(signInButton).toBeInTheDocument();
});
