import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBox, FaShoppingCart, FaUsers, FaTruck, FaSignOutAlt } from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>DarkStore Admin</h2>
        <ul>
          <li onClick={() => navigate("/inventory")}><FaBox /> Inventory</li>
          <li onClick={() => navigate("/orders")}><FaShoppingCart /> Orders</li>
          <li onClick={() => navigate("/staff")}><FaUsers /> Staff</li>
          <li onClick={() => navigate("/logistics")}><FaTruck /> Logistics</li>
          <li className="logout-btn" onClick={() => navigate("/")}>
            <FaSignOutAlt /> Logout
          </li>
        </ul>
      </div>

      <div className="main-content">
        <h1>Welcome to Dark Store Management Dashboard</h1>
        <div className="dashboard-cards">
          <div className="card">📦 Inventory: 100 Items</div>
          <div className="card">🛒 Orders: 50 Pending</div>
          <div className="card">👥 Staff: 25 Employees</div>
          <div className="card">🚛 Logistics: 10 Vehicles</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
