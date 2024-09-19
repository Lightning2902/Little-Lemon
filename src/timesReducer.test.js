import { initializeTimes, updateTimes } from './Main'; // Assuming these functions are in Main.js

// Test for initializeTimes function
test('initializeTimes returns correct initial times', () => {
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
});

// Test for updateTimes function
test('updateTimes returns same times regardless of date', () => {
    const initialTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const action = { type: 'UPDATE_TIMES', payload: '2024-09-30' }; // Example date
    const updatedTimes = updateTimes(initialTimes, action);
    expect(updatedTimes).toEqual(initialTimes); // Expected same times for now
});






// Explanation:
// initializeTimes test:
// This test checks that initializeTimes returns the expected array of times.
// updateTimes test:
// We simulate a state change by dispatching an action with a type of UPDATE_TIMES and a sample date.
// Since the logic hasn’t been updated to change times based on the date, we expect it to return the same times as before.