import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import useHttp from "./hooks/useHttp";

function App() {
  const { error: httpError, loading: httpLoading, data: httpData } = useHttp(
    "https://expense-tracker-react-32e92-default-rtdb.europe-west1.firebasedatabase.app/expenses.json"
  );

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
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={httpData} />
      {httpError && <p>no expenses available on database</p>}
    </div>
  );
}

export default App;
