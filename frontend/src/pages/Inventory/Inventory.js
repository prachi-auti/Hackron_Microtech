import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaBox, FaShoppingCart, FaUsers, FaTruck, FaSignOutAlt, FaChartLine } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Inventory.css";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [lowStockItems, setLowStockItems] = useState([]);
  const [totalInventoryValue, setTotalInventoryValue] = useState(0);
  const [stockPredictions, setStockPredictions] = useState([]);
  const [fullStockItems, setFullStockItems] = useState([]);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/inventory");
        const items = response.data;

        setInventory(items);
        
        // Filter low stock items (Stock < 5)
        const lowStockList = items.filter(item => item.stock < 5);
        setLowStockItems(lowStockList);

        // Calculate total inventory value
        const totalValue = items.reduce((acc, item) => acc + (item.price * item.stock), 0);
        setTotalInventoryValue(totalValue);

        // Simulated prediction logic (Reduce stock by 10% to predict depletion)
        const predictions = items.map(item => ({
          name: item.name,
          predictedStock: Math.max(0, Math.floor(item.stock * 0.9)) // 10% reduction prediction
        }));
        setStockPredictions(predictions);

        // Get full stock items (Stock > 50)
        const fullStockList = items.filter(item => item.stock >= 50);
        setFullStockItems(fullStockList);
      } catch (error) {
        console.error("Error fetching inventory:", error);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="inventory-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>DarkStore Admin</h2>
        <ul>
          <li><FaBox /> Inventory</li>
          <li><FaShoppingCart /> Orders</li>
          <li><FaUsers /> Staff</li>
          <li><FaTruck /> Logistics</li>
          <li className="logout-btn"><FaSignOutAlt /> Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Inventory Management</h1>

        <div className="dashboard-cards">
          <div className="card">📦 Total Items: {inventory.length}</div>
          <div className="card">⚠ Low Stock: {lowStockItems.length} Items</div>
          <div className="card">💰 Total Inventory Value: ₹{totalInventoryValue.toFixed(2)}</div>
        </div>

        {/* Low Stock Alerts */}
        {lowStockItems.length > 0 && (
          <div className="low-stock-section">
            <h2>⚠ Low Stock Alerts</h2>
            <ul>
              {lowStockItems.map((item) => (
                <li key={item._id}>{item.name} (Stock: {item.stock})</li>
              ))}
            </ul>
          </div>
        )}

        {/* Predicted Stock Analysis */}
        <div className="prediction-section">
          <h2><FaChartLine /> Stock Prediction (Next Cycle)</h2>
          <ul>
            {stockPredictions.map((item, index) => (
              <li key={index}>
                {item.name}: Predicted Stock - {item.predictedStock}
              </li>
            ))}
          </ul>
        </div>

        {/* Full Stock Items Navigation */}
        <div className="full-stock-navigation">
          <Link to="/full-stock" className="btn-primary">View Full Stock Items</Link>
        </div>
        <br></br>
        <div className="home-button">
          <Link to="/" className="btn-primary">Go to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
