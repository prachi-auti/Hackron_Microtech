import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="home-container"
    >
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">DarkStore</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/SignUp">Sign Up</Link></li>
          <li><Link to="/AdminLogin">Admin Login</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <motion.h1 initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 0.5 }}>
          Efficient Dark Store Management
        </motion.h1>
        <p>Streamline inventory, orders, and logistics with our advanced platform.</p>
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/dashboard" className="btn-primary">Go to Dashboard</Link>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2>Key Features</h2>
        <div className="feature-grid">
          {[
            { title: "📦 Inventory Management", desc: "Track and optimize stock levels in real-time." },
            { title: "📜 Order Management", desc: "Seamless order processing and fulfillment." },
            { title: "👥 Staff Coordination", desc: "Efficiently assign tasks and manage workforce." },
            { title: "🚚 Logistics Planning", desc: "Optimize delivery routes and reduce delays." }
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="feature-card"
              whileHover={{ scale: 1.05 }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 DarkStore Management. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

export default Home;
