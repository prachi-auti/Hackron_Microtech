import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css"; // Import the CSS file

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Save user details in localStorage (Dummy user storage)
    localStorage.setItem("user", JSON.stringify(user));
    alert("Signup Successful! Please log in.");
    navigate("/login"); // Redirect to login
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="Enter your name" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" onChange={handleChange} required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={handleChange} required />
          </div>
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>

        <div className="extra-options">
          <p>
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Login
            </span>
          </p>
          <p>
            <span className="forgot-password" onClick={() => navigate("/forgot-password")}>
              Forgot Password?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
