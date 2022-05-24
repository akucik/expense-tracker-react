import { useState, useEffect, useCallback } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// const expenseDatabase = [
//   { id: "ex1", title: "Dinner", amount: 30, date: new Date(2022, 3, 9) },
//   { id: "ex2", title: "Insurance", amount: 300, date: new Date(2022, 4, 15) },
//   { id: "ex3", title: "Food", amount: 80, date: new Date(2022, 4, 27) },
// ];

function App() {
  //const [expenses, setExpenses] = useState(expenseDatabase);

  // const addExpenseHandler = (expense) => {
  //   setExpenses((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  // };
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  const fetchExpenses = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        "https://expense-tracker-react-32e92-default-rtdb.europe-west1.firebasedatabase.app/expenses.json"
      );
      if (!response.ok) {
        throw new Error("ups...spare us a second :)");
      }
      const data = await response.json();

      const loadedExpenses = [];
      for (const key in data) {
        loadedExpenses.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          date: data[key].date,
        });
      }
      console.log("loadedExpenses:", loadedExpenses);
      setExpenses(loadedExpenses);
    } catch (err) {
      setError(err.message);
    }
  }, []);
  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  async function addExpenseHandler(expense) {
    const response = await fetch(
      "https://expense-tracker-react-32e92-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
      {
        method: "POST",
        body: JSON.stringify(expense),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {error && <p>no expenses available on database</p>}
    </div>
  );
}

export default App;
