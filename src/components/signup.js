
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
   const [loading, setLoading] = useState(false); 

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true); 
      setMessage(''); 
      try {
         const response = await axios.post('https://tele-backend.onrender.com/api/signup', formData);
         setMessage(response.data.message);
      } catch (error) {
         setMessage(error.response?.data?.message || 'Server error');
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="signup-container">
         <h2>Contact Info</h2>
         <p>Confirm the details you'd like to share with us</p>
         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <label>Full Name:</label>
               <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label>Email:</label>
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="form-group">
               <label>Phone Number:</label>
               <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
               />
            </div>
            <button type="submit" className="submit-button" disabled={loading}>
               {loading ? 'Submitting...' : 'Submit'}
            </button>
         </form>
         {loading && <p className="loading-message">Please wait...</p>} {/* Loading indicator */}
         {message && <p className="message">{message}</p>} {/* Success or error message */}
      </div>
   );
};

export default SignupForm;








// export default SignupForm;
