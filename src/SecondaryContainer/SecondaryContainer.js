import "./SecondaryContainer.css";
import ThankYouIcon from "../images/thankyouicon.svg";
import { useState } from "react";

function SecondaryContainer(props) {
  return (
    <div className="secondaryContainer">
      <img src={ThankYouIcon} alt="ICON" className="thankYouIcon" />
      <div className="showsSelectedBox">
        <p className="showsSelectedText">
          You selected {props.result} out of 5
        </p>
      </div>
      <h1 className="thankYouText">Thank you!</h1>
      <h3 className="thankYouLongText">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </h3>
    </div>
  );
}

export default SecondaryContainer;
