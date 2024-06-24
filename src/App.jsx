import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput({
      ...userInput,
      [inputIdentifier]: +newValue,
    });
  }

  return (
    <>
      <Header>React Investment Calculator</Header>
      <UserInput userInput={userInput} onChange={handleChange} />
      <div className="center">
        <Results data={userInput} />
      </div>
    </>
  );
}

export default App;
