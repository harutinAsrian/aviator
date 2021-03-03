import React from "react";
import "./Bet.css";

function Bet({ value = "BET" }) {
  return <div className="Bet">{value}</div>;
}

export default Bet;
