import { useState } from "react";
import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.name);
  //let title = props.name;

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </li>
  );
};
export default ExpenseItem;
