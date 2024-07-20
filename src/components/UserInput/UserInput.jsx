import "./UserInput.css";

export const UserInput = ({
  handleInitialInvest,
  handleAnnualInvest,
  handleExpReturn,
  handleDuration,
}) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            id="initial-investment"
            type="number"
            onChange={handleInitialInvest}
            required
          ></input>
        </div>
        <div>
          <label htmlFor="expected-return">Expected Return</label>
          <input
            id="expected-return"
            type="number"
            onChange={handleExpReturn}
            required
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            id="annual-investment"
            type="number"
            onChange={handleAnnualInvest}
            required
          />
        </div>
        <div>
          <label htmlFor="duration">Duration</label>
          <input
            id="duration"
            type="number"
            onChange={handleDuration}
            required
          />
        </div>
      </div>
    </section>
  );
};
