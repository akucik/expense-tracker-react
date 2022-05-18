import { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const expenseDataHandler = (expenseData) => {
    const enteredExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    //below by passing expenseData we don't keep data here but pass to other component, lifting state up(toApp.js)
    props.onAddExpense(enteredExpenseData);
    setIsEditing(false);
  };
  const startEditHandler = () => {
    setIsEditing(true);
  };
  const stopEditHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onStop={stopEditHandler}
          onExpenseData={expenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
