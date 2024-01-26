import React from 'react';
import './Login.css'; // Import the CSS file for styling
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='loginPage'>
      <div className="login-container">
        <FaUser size={24} color='#6c72ff'/>
      <h3>Sign Up</h3>
      <label for="userType">Select your role:</label>
      <select id="userType" className='selectOne'>
          <option value="client">Client</option>
          <option value="driver">Driver</option>
      </select>
      
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" required className="inputOne" />

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" required className="inputOne" />

      <label htmlFor="number">Number</label>
      <input type="text" id="number" name="number" required className="inputOne" />

      <label htmlFor="id">ID</label>
      <input type="text" id="id" name="id" required className="inputOne" />

      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" required className="inputOne" />

      <button className="register-btn">Register</button>
    </div>
    </div>
  );
};

const Login = () => {
  return (
    <div className='loginPage'>
      <div className="login-container">
        <FaUser size={24} color='#6c72ff'/>
      <h3>Login</h3>
      <label htmlFor="loginNumber">Number</label>
      <input type="text" id="loginNumber" name="loginNumber" required className="inputOne" />

      <label htmlFor="loginPassword">Password</label>
      <input type="text" id="loginPassword" name="loginPassword" required className="inputOne" />
      <p>Not a member? <Link to="/signup">Sign up here</Link></p>
      <button className="register-btn">Login</button>
    </div>
    </div>
  );
};

export { Signup, Login };
