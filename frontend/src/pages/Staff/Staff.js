import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUsers, FaSignOutAlt } from "react-icons/fa";
import "./Staff.css";

const Staff = () => {
  const [staffMembers, setStaffMembers] = useState([]);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/staff");
        setStaffMembers(response.data);
      } catch (error) {
        console.error("Error fetching staff members:", error);
      }
    };

    fetchStaff();
  }, []);

  return (
    <div className="staff-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>DarkStore Admin</h2>
        <ul>
          <li><FaUsers /> Staff</li>
          <li className="logout-btn"><FaSignOutAlt /> Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Staff Management</h1>
        <div className="staff-cards">
          <div className="card">👥 Total Staff: {staffMembers.length}</div>
        </div>

        {/* Staff List */}
        {staffMembers.length > 0 && (
          <div className="staff-list">
            <h2>Staff Members</h2>
            <ul>
              {staffMembers.map((staff) => (
                <li key={staff._id}>{staff.name} - {staff.role}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Staff;