import { validateGuests } from './components/BookingForm';

test('validateGuests returns true for valid guest number', () => {
  const isValid = validateGuests(5);
  expect(isValid).toBe(true);
});

test('validateGuests returns false for invalid guest number', () => {
  const isInvalid = validateGuests(0);
  expect(isInvalid).toBe(false);
});
