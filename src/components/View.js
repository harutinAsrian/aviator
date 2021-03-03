import React, { useState } from "react";
import Display from "./display/Display";
import BetControl from "./betControl/BetControl";
import History from "./history/History";
import "./View.css";

function View() {
  const [currentAmount, setCurrentAmount] = useState([
    {
      stack: "100$",
    },
  ]);

  const onPlus = () => {
    setCurrentAmount([...currentAmount, { stack: "200$" }]);
  };

  return (
    <div className="view">
      <div className="view__game">
        <Display />
        <div className="bet-control-container">
          {currentAmount.map((item) => {
            return <BetControl onPlus={onPlus} currentAmount={currentAmount} />;
          })}
        </div>
      </div>
      <History />
    </div>
  );
}

export default View;
