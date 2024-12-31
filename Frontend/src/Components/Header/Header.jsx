import React, { useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";


function Header() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const HandleSignIn = () => {

    if(!email || !password){
      alert("Please enter email and password");
      return
    }
    navigate("/userpage");
  };
  return (
    <header className="header">
      <h1 className="title">E-Billing System</h1>
      <div className="login-form">
        <input type="email" placeholder="Email" className="input-field" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="input-field" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="login-button" onClick={HandleSignIn}>Sign in</button>
      </div>
    </header>
  );
}

export default Header;
