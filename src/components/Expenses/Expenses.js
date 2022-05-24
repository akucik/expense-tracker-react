import { useState } from "react";
import "./Expenses.css";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  console.log("props.items:", props.items);

  const filteredExpenses = props.items.filter((item) => {
    const convertedDate = new Date(item.date);
    console.log(
      "convertedDate:",
      convertedDate.getFullYear().toString() === filteredYear
    );
    return convertedDate.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseFilter onFilter={filterChangeHandler} selected={filteredYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};
export default Expenses;
