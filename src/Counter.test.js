import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Nokiacounter';

describe('Counter Component', () => {
  test('renders the Counter component', () => {
    render(<Counter />);
    const counterText = screen.getByText(/Counter/i);
    expect(counterText).toBeInTheDocument();
  });

  test('increments the count', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    const count = screen.getByText('1');
    expect(count).toBeInTheDocument();
  });

  test('decrements the count', () => {
    render(<Counter />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);
    const count = screen.getByText('-1');
    expect(count).toBeInTheDocument();
  });

  test('shows error message if increment clicked within 3 seconds', () => {
    render(<Counter />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton); // Second click within 3 seconds
    const errorMessage = screen.getByText(/please wait 3 seconds/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
