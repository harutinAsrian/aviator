import React, { useState } from "react";
import ToggleButtons from "./toggleButtons/ToggleButtons";
import BetAmount from "./betAmount/BetAmount";
import Bet from "./BET/Bet";
import Auto from "./auto/Auto";
import headerBg from "../../img/bg/header-bg.png";
import "./BetControl.css";

function BetControl({ onPlus, currentAmount }) {
  const [switchBtns] = useState("");

  const handlePlus = () => {
    onPlus();
  };

  return (
    <div
      className="Bet-Control"
      style={{ backgroundImage: `url(${headerBg})` }}
    >
      <ToggleButtons />
      <div className="btn-container">
        <BetAmount />;
        <Bet />
      </div>
      <Auto />
      <div className="bet__add" onClick={handlePlus}>
        <i className="fas fa-plus-circle"></i>
      </div>
    </div>
  );
}

export default BetControl;
