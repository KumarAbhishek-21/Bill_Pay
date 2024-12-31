import React from "react";
import "./Dashboard.css";


const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard Overview</h1>
      <h2>Stats</h2>
      <div className="stats-container">
        <div className="stats-box">
          <h3>$ 0</h3>
          <p>Payed Bills</p>
        </div>
        <div className="stats-box">
          <h3>$ 0</h3>
          <p>Pending Bills</p>
        </div>
        <div className="stats-box">
          <h3>🔊 0</h3>
          <p>Unprocessed Complaints</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

