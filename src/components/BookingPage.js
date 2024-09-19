//the basic booking page  starts here *******************

// import React from 'react';
// import BookingForm from './BookingForm'; // Import the BookingForm component


// const BookingPage = () => {
//   return (
//     <div>
//       <h1>Make a Reservation</h1>
//       <BookingForm  /> {/* Include the BookingForm component */}
//     </div>
//   );
// };

// export default BookingPage;


//the basic booking page ends here ************************



//this is the function api ************************

// const seededRandom = function (seed) {
//   var m = 2**35 - 31;
//   var a = 185852;
//   var s = seed % m;
//   return function () {
//       return (s = s * a % m) / m;
//   };
// }

// const fetchAPI = function(date) {
//   let result = [];
//   let random = seededRandom(date.getDate());

//   for(let i = 17; i <= 23; i++) {
//       if(random() < 0.5) {
//           result.push(i + ':00');
//       }
//       if(random() < 0.5) {
//           result.push(i + ':30');
//       }
//   }
//   return result;
// };
// const submitAPI = function(formData) {
//   return true;
// };


//************************ ************************ ************************




// this is  state up

// import React, { useState, useReducer } from 'react';
// import BookingForm from './BookingForm';

// // Initialize times - can be updated with more complex logic later
// const initializeTimes = () => {
//   return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
// };

// // Reducer function to handle available times based on date
// const updateTimes = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_TIMES':
//       // For now, we return the same times, regardless of the selected date
//       return initializeTimes();
//     default:
//       return state;
//   }
// };

// const Main = () => {
//   // Lifted state for form data
//   const [formData, setFormData] = useState({
//     date: '',
//     time: '',
//     guests: 1,
//     occasion: 'Birthday',
//   });

//   // useReducer for managing availableTimes
//   const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

//   // Handle form changes by updating formData state
//   const handleFormChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   // Handle date change and update available times
//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     setFormData({ ...formData, date: selectedDate });
//     dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
//   };

//   return (
//     <div className="main-content">
//       <h1>Make a Reservation</h1>
//       {/* Pass formData, handlers, and availableTimes to BookingForm */}
//       <BookingForm
//         formData={formData}
//         handleFormChange={handleFormChange}
//         handleDateChange={handleDateChange}
//         availableTimes={availableTimes}
//       />
//     </div>
//   );
// };

// export default Main;





//this is the final updated one(state up and api and use reducer)
import { useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from './Api';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';

const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today); // Fetch initial times for today
};

const updateTimes = (state, action) => {
    if (action.type === 'UPDATE_TIMES') {
        return fetchAPI(new Date(action.payload)); // Fetch times for the selected date
    }
    return state;
};

const BookingPage = () => {
    const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        guests: 1,
        occasion: ''
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/confirmed'); // Navigate to confirmation page
        }
    };

    return (
        <BookingForm
            availableTimes={availableTimes}
            handleFormChange={handleFormChange}
            handleDateChange={(date) => dispatch({ type: 'UPDATE_TIMES', payload: date })}
            submitForm={submitForm}
            formData={formData}
        />
    );
};

export default BookingPage;

