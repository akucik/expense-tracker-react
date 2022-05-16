import { Fragment, useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <>
      <div className="expenses">
        <ExpenseFilter onFilter={filterChangeHandler} selected={filteredYear} />
        <ExpenseItem
          name={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          name={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
      </div>
    </>
  );
};
export default Expenses;
