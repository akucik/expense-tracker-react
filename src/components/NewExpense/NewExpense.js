import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseDataHandler = (expenseData) => {
    const enteredExpenseData = {
      ...expenseData,
      id: Math.random().toString(),
    };
    console.log(enteredExpenseData);
    //below by passing expenseData we don't keep data here but pass to other component, lifting state up(toApp.js)
    props.onAddExpense(enteredExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onExpenseData={expenseDataHandler} />
    </div>
  );
};

export default NewExpense;
