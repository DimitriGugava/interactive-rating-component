import "./MainComponent.css";
import starIcon from "../images/starIcon.svg";
import RateContainer from "../rateContainer/Ratecontainer";
import React, { useState } from "react";
function MainCoponent(props) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div className="Container">
      <img src={starIcon} className="starIcon" />
      <h1 className="headerText">How did we do?</h1>
      <h3 className="secondaryText">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </h3>

      <RateContainer
        submited={props.submited}
        rate={props.rate}
        numbers={numbers}
        selectedKey={props.selectedKey}
      />
    </div>
  );
}

export default MainCoponent;
