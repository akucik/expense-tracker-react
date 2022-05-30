import { useState, useMemo } from "react";
import "./Expenses.css";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenseItems = useMemo(() => {
    if (!props.items) {
      return [];
    }
    const loadedExpenses = [];
    for (const key in props.items) {
      loadedExpenses.push({
        id: key,
        title: props.items[key].title,
        amount: props.items[key].amount,
        date: props.items[key].date,
      });
    }
    loadedExpenses.sort((a, b) => {
      return new Date(a.date) > new Date(b.date) ? -1 : 1;
    });
    return loadedExpenses;
  }, [props.items]);

  const filteredExpenses = expenseItems.filter((item) => {
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
