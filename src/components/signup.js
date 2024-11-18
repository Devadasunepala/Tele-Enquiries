import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';

const SignupForm = () => {
   const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      phoneNumber: '',
   });
   const [message, setMessage] = useState('');

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };
   
   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post('https://tele-backend.onrender.com/api/signup', formData);
         setMessage(response.data.message);
      } catch (error) {
         setMessage(error.response?.data?.message || "Server error");
      }
   };
   return (
      <div className="signup-container">
         <h2>Contact info</h2>
         <p>Confirm the details you'd like to share with us</p>
         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <label>Full Name:</label>
               <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
               <label>Email:</label>
               <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
               <label>Phone Number:</label>
               <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-button">Submit</button>
         </form>
         {message && <p className="message">{message}</p>}
      </div>
   );
};

export default SignupForm;
