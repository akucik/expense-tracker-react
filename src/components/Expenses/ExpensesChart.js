import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
  ];

  //create 'for' loop:
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  //above: we increase the value of the month by expense amount.
  //after the looping the values in chartDataPoints, are no longer'0' but will be updated with expense amount.

  return <Chart item={chartDataPoints} />;
};
export default ExpensesChart;
