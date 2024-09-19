//the basic booking form starts here *******************

// import React, { useState } from "react";

// const BookingForm = () => {
//   // Manage form data in the state
//   const [formData, setFormData] = useState({
//     date: "",
//     time: "",
//     guests: 1,
//     occasion: "Birthday",
//   });

//   const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Reservation details:", formData);
//     // You can implement form submission logic here (e.g., sending to a server)
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
//     >
//       <label htmlFor="date">Choose date</label>
//       <input
//         type="date"
//         id="date"
//         value={formData.date}
//         onChange={handleChange}
//         required
//       />

//       <label htmlFor="time">Choose time</label>
//       <select id="time" value={formData.time} onChange={handleChange} required>
//         <option value="">Select a time</option>
//         {availableTimes.map((time) => (
//           <option key={time} value={time}>
//             {time}
//           </option>
//         ))}
//       </select>

//       <label htmlFor="guests">Number of guests</label>
//       <input
//         type="number"
//         id="guests"
//         min="1"
//         max="10"
//         value={formData.guests}
//         onChange={handleChange}
//         required
//       />

//       <label htmlFor="occasion">Occasion</label>
//       <select id="occasion" value={formData.occasion} onChange={handleChange}>
//         <option value="Birthday">Birthday</option>
//         <option value="Anniversary">Anniversary</option>
//       </select>

//       <input type="submit" value="Make Your Reservation" />
//     </form>
//   );
// };

// export default BookingForm;

//the basic bookingform ends here *******************

// this is after state up

// import React from 'react';

// const BookingForm = ({ formData, handleFormChange, handleDateChange, availableTimes }) => {
//   return (
//     <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
//       <label htmlFor="date">Choose date</label>
//       <input
//         type="date"
//         id="date"
//         value={formData.date}
//         onChange={handleDateChange} // Call handleDateChange to update the date and available times
//         required
//       />

//       <label htmlFor="time">Choose time</label>
//       <select id="time" value={formData.time} onChange={handleFormChange} required>
//         <option value="">Select a time</option>
//         {availableTimes.map((time) => (
//           <option key={time} value={time}>
//             {time}
//           </option>
//         ))}
//       </select>

//       <label htmlFor="guests">Number of guests</label>
//       <input
//         type="number"
//         id="guests"
//         min="1"
//         max="10"
//         value={formData.guests}
//         onChange={handleFormChange}
//         required
//       />

//       <label htmlFor="occasion">Occasion</label>
//       <select id="occasion" value={formData.occasion} onChange={handleFormChange}>
//         <option value="Birthday">Birthday</option>
//         <option value="Anniversary">Anniversary</option>
//       </select>

//       <input type="submit" value="Make Your Reservation" />
//     </form>
//   );
// };

// export default BookingForm;

//this is the one with api of submitapi

import React, { useState } from "react";
import "../styles/BookingForm.css"

const BookingForm = ({
  availableTimes,
  handleFormChange,
  submitForm,
  formData,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      submitForm(formData); // Call submitForm with the form data
    }
  };

  const validateForm = () => {
    const isValid =
      formData.date &&
      formData.time &&
      formData.guests > 0 &&
      formData.occasion;
    setIsFormValid(isValid);
  };

  const handleFieldChange = (e) => {
    handleFormChange(e);
    validateForm(); // Validate form after each field change
  };

  return (
    <form
      onSubmit={handleSubmit}
    //   style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={formData.date}
        onChange={handleFieldChange}
        required // HTML5 validation to ensure a date is selected
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        value={formData.time}
        onChange={handleFieldChange}
        required // HTML5 validation to ensure time is selected
      >
        <option value="">Select time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        name="guests"
        min="1"
        max="10"
        value={formData.guests}
        onChange={handleFieldChange}
        required // Ensure there’s at least 1 guest
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleFieldChange}
        required // Ensure an occasion is selected
      >
        <option value="">Select occasion</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button
        aria-label="Make reservation button"
        type="submit"
        disabled={!isFormValid}
        className="submit-button"
      >
        Make Your Reservation
      </button>

      {/* <button type="submit" disabled={!isFormValid}>Make Your Reservation</button> */}
    </form>
  );
};

export default BookingForm;
