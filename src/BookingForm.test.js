import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} formData={{}} handleFormChange={() => {}} handleDateChange={() => {}} />);
    const headingElement = screen.getByText("Make Your Reservation");
    expect(headingElement).toBeInTheDocument();
});




// Explanation:
// The test renders the BookingForm component with minimal required props like availableTimes, formData, and handlers.
// It checks if the heading "Make Your Reservation" is present in the document.