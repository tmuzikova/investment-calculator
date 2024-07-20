import "./Results.css";

export const Results = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) => {
  function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  }) {
    const annualData = [];
    let investmentValue = initialInvestment;
    let totalInterest = 0;
    let totalInvestedCapital = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      totalInterest += interestEarnedInYear;
      investmentValue += interestEarnedInYear + annualInvestment;
      totalInvestedCapital += annualInvestment;
      annualData.push({
        year: i + 1, // year identifier
        interest: interestEarnedInYear, // the amount of interest earned in this year
        valueEndOfYear: investmentValue, // investment value at end of year
        annualInvestment: annualInvestment, // investment added in this year
        totalInterest: totalInterest, // cumulative interest
        totalInvestedCapital: totalInvestedCapital, // cumulative invested capital
      });
    }

    return annualData;
  }

  let annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  console.log(annualData);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest (Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {annualData.map((annualDataset, index) => (
            <tr key={index}>
              <td>{annualDataset.year}</td>
              <td>{formatter.format(annualDataset.valueEndOfYear)}</td>
              <td>{formatter.format(annualDataset.interest)}</td>
              <td>{formatter.format(annualDataset.totalInterest)}</td>
              <td>{formatter.format(annualDataset.totalInvestedCapital)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
