import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Results } from "./components/Results/Results";
import { UserInput } from "./components/UserInput/UserInput";

function App() {
  const [initialInvest, setInitialInvest] = useState("");
  const [annualInvest, setAnnualInvest] = useState("");
  const [expReturn, setExpReturn] = useState("");
  const [duration, setDuration] = useState("");

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
      <Results
        initialInvestment={Number(initialInvest)}
        annualInvestment={Number(annualInvest)}
        expectedReturn={Number(expReturn)}
        duration={Number(duration)}
      />
    </>
  );
}

export default App;
