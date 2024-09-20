import { initializeTimes } from './components/BookingPage';
import { fetchAPI } from './components/Api';

jest.mock('./path-to-api', () => ({
  fetchAPI: jest.fn(),
}));

test('initializeTimes should call fetchAPI and return available times', () => {
  const mockTimes = ['17:00', '18:00'];
  fetchAPI.mockReturnValue(mockTimes);

  const result = initializeTimes();

  expect(fetchAPI).toHaveBeenCalled();
  expect(result).toEqual(mockTimes);
});


// import { updateTimes } from './components/BookingPage';
// import { fetchAPI } from './components/Api';

// jest.mock('./path-to-api', () => ({
//   fetchAPI: jest.fn(),
// }));

// test('updateTimes should call fetchAPI with the selected date', () => {
//   const mockTimes = ['19:00', '20:00'];
//   const selectedDate = new Date(2024, 9, 20);
  
//   fetchAPI.mockReturnValue(mockTimes);

//   const result = updateTimes(selectedDate);

//   expect(fetchAPI).toHaveBeenCalledWith(selectedDate);
//   expect(result).toEqual(mockTimes);
// });
