import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Results } from "./components/Results/Results";
import { UserInput } from "./components/UserInput/UserInput";

function App() {
  const [initialInvest, setInitialInvest] = useState("");
  const [annualInvest, setAnnualInvest] = useState("");
  const [expReturn, setExpReturn] = useState("");
  const [duration, setDuration] = useState("");
  const [isDurationProvided, setIsDurationProvided] = useState("");

  const inputIsValid = duration >= 1;

  const handleInitialInvest = (event) => {
    setInitialInvest(event.target.value);
  };

  const handleAnnualInvest = (event) => {
    setAnnualInvest(event.target.value);
  };
  const handleExpReturn = (event) => {
    setExpReturn(event.target.value);
  };
  const handleDuration = (event) => {
    setDuration(event.target.value);
    setIsDurationProvided(true);
  };

  return (
    <>
      <Header />
      <UserInput
        handleInitialInvest={handleInitialInvest}
        handleAnnualInvest={handleAnnualInvest}
        handleExpReturn={handleExpReturn}
        handleDuration={handleDuration}
      />
      {isDurationProvided && !inputIsValid && (
        <p className="center">Please enter duration greater than 0.</p>
      )}
      {inputIsValid && (
        <Results
          initialInvestment={Number(initialInvest)}
          annualInvestment={Number(annualInvest)}
          expectedReturn={Number(expReturn)}
          duration={Number(duration)}
        />
      )}
    </>
  );
}

export default App;
