import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaBox, FaShoppingCart, FaUsers, FaTruck, FaSignOutAlt } from "react-icons/fa";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [pendingOrders, setPendingOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/orders");
        setOrders(response.data);

        setPendingOrders(response.data.filter(order => order.status === "Pending"));
        setCompletedOrders(response.data.filter(order => order.status === "Completed"));
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
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
        <h1>Orders Management</h1>
        <div className="dashboard-cards">
          <div className="card">📦 Total Orders: {orders.length}</div>
          <div className="card">🕒 Pending Orders: {pendingOrders.length}</div>
          <div className="card">✅ Completed Orders: {completedOrders.length}</div>
        </div>

        {pendingOrders.length > 0 && (
          <div className="pending-orders-section">
            <h2>🕒 Pending Orders</h2>
            <ul>
              {pendingOrders.map(order => (
                <li key={order._id}>Order #{order._id} - {order.customerName}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Go to Home Button */}
        <div className="home-button">
          <button onClick={() => navigate("/")} className="btn-primary">Go to Home</button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
