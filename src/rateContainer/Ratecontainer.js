import "./RateContainer.css";
import React, { useState } from "react";
import ThankYouIcon from "../images/thankyouicon.svg";

function RateContainer({ numbers, rate, selectedKey, submited }) {
  function click(key) {
    rate(key);
  }

  const submit = (event) => {
    submited(true);
  };

  return (
    <div className="containerForSumbitandRate">
      <div className="containerForRateNumbers">
        {numbers.map((item) => {
          return (
            <div
              onClick={(event) => click(item)}
              key={item}
              className={`oval ${selectedKey === item ? "active" : ""}`}
            >
              {item}
            </div>
          );
        })}
      </div>
      <button onClick={submit} className="submit">
        SUBMIT
      </button>
    </div>
  );
}

export default RateContainer;
