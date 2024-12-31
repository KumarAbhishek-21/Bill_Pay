import React from "react";
import "./Body.css";
import SignupForm from "../SignupForm/SignupForm";
import Header from "../Header/Header";
const Body = () => {
  return (
    <div className="Body">
      <Header />
      <div className="main-content">
        <div className="info-section">
          <h1>Electricity Billing System</h1>
          <p>
            This website at the end of its construction will act as a consumer-oriented
            service for users for easy payment of their respective Electricity Bill
            as well as interact with their providers in case of any queries or grievances.
          </p>
        </div>
        <SignupForm/>
      </div>
    </div>
  );
}

export default Body;
