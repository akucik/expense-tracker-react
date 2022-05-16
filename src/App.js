import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { id: "ex1", title: "Dinner", amount: 30, date: new Date(2022, 3, 9) },
    { id: "ex2", title: "Insurance", amount: 300, date: new Date(2022, 4, 15) },
    { id: "ex3", title: "Food", amount: 80, date: new Date(2022, 4, 27) },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in App.js", expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
