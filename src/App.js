import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const LOCAL__DATA = [
  { id: "ex1", title: "Dinner", amount: 30, date: new Date(2022, 3, 9) },
  { id: "ex2", title: "Insurance", amount: 300, date: new Date(2022, 4, 15) },
  { id: "ex3", title: "Food", amount: 80, date: new Date(2022, 4, 27) },
];
function App() {
  const [expenses, setExpenses] = useState(LOCAL__DATA);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
