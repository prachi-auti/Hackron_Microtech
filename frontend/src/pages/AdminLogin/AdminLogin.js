import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css"; // Ensure CSS file exists

const AdminLogin = () => {
  const navigate = useNavigate();
  
  const [adminData, setAdminData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    // Redirect to dashboard if already logged in
    if (localStorage.getItem("isAdminAuthenticated") === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy admin credentials (Replace with backend authentication later)
    const adminEmail = "";
    const adminPassword = "";

    if (adminData.email === adminEmail && adminData.password === adminPassword) {
      localStorage.setItem("isAdminAuthenticated", "true"); // Save login state
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to Dashboard
    } else {
      setError("Invalid email or password!");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-box">
        <h2>Admin Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={adminData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={adminData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>

        {/* Sign Up Button */}
        <div className="signup-section">
          <p>Don't have an account? <button onClick={() => navigate("/signup")} className="signup-btn">Sign Up</button></p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
