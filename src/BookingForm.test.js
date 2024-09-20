import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('renders correct attributes for number of guests input', () => {
  render(<BookingForm />);
  
  const guestsInput = screen.getByLabelText(/Number of guests/i);

  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');
  expect(guestsInput).toHaveAttribute('type', 'number');
});
