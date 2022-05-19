import "./Chart.css";
import ChartBar from "./ChartBar";

//dynamically render listOfItems(dataPoints) as <ul>, then pass some data to chartBar to control what value is rendered(displayed).
//for Key in this example, we use label
const Chart = (props) => {
  console.log(props.items);
  const expenseValue = props.items.map((item) => item.value);
  const maxChartValue = Math.max(...expenseValue);

  return (
    <div className="chart">
      {props.items.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={maxChartValue}
          label={item.label}
        />
      ))}
    </div>
  );
};
export default Chart;
