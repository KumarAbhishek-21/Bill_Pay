import React from "react";
import "./SignupForm.css";

const SignupForm = () => {
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Address" />
        <div className="button">
          <button className="btn" type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
