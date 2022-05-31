import React from "react";
import { useNavigate } from "react-router-dom";
import illuminate from "../images/illuminate-logos_black.png";
import "../homepage.css";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <img id="logo" src={illuminate} alt="Illuminate Logo" />
      <div className="buttons">
        <div className="signBtn">
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
        <div className="logBtn">
          <button onClick={() => navigate("/login")}>Log In</button>
        </div>
      </div>
      <div className="home-q">
        <h1 className="home-quote">
          "YOU ARE MORE PRECIOUS TO THIS WORLD THAN YOU'LL EVER KNOW"
        </h1>
      </div>
    </div>
  );
};
