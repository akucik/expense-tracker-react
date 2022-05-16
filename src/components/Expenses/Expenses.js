import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  let messageContent = <p>no expenses found!</p>;
  if (filteredExpenses.length > 0) {
    messageContent =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          name={item.title}
          amount={item.amount}
          date={item.date}
        />
      ));
  }
  return (
    <div className="expenses">
      <ExpenseFilter onFilter={filterChangeHandler} selected={filteredYear} />
      {messageContent}
    </div>
  );
};
export default Expenses;
