import React from "react";
import Chart from "../Chart/Chart";

export default function ExpensesChart(props) {
  const costMonthly = [
    { Label: "Jan", Value: 0 },
    { Label: "Feb", Value: 0 },
    { Label: "Mar", Value: 0 },
    { Label: "Apr", Value: 0 },
    { Label: "May", Value: 0 },
    { Label: "Jun", Value: 0 },
    { Label: "Jul", Value: 0 },
    { Label: "Aug", Value: 0 },
    { Label: "Sep", Value: 0 },
    { Label: "Oct", Value: 0 },
    { Label: "Nov", Value: 0 },
    { Label: "Dec", Value: 0 },
  ];
  for (const expense of props.expenses) {
    const index = new Date(expense.date).getMonth();
    costMonthly[index].Value += expense.amount;
  }
  return <Chart dataPoints={costMonthly} />;
}
