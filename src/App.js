import React, { useState } from "react";
import "./App.css";
import MainComponent from "./MainComponentContainer/MainComponent";
import SecondaryContainer from "./SecondaryContainer/SecondaryContainer";

function App() {
  const [selectedRate, setSelectedRate] = useState(0);
  const [isShown, setIsShown] = useState(false);
  console.log(isShown);
  return (
    <div className="App">
      {!isShown && (
        <MainComponent
          rate={setSelectedRate}
          selectedKey={selectedRate}
          submited={setIsShown}
        />
      )}

      {isShown && <SecondaryContainer result={selectedRate} />}
    </div>
  );
}

export default App;
