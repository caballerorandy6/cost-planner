import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";
import { generateUniqueId, formatDate } from "./helpers";

function App() {
  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [expense, setExpense] = useState({});
  const [expenses, setExpenses] = useState([]);

  const handleNewExpense = () => {
    setTimeout(() => {
      setModal(true);
    }, 400);
  };

  const saveExpense = (expense) => {
    expense.id = generateUniqueId();
    expense.date = formatDate(Date.now());
    setExpenses([...expenses, expense]);
    console.log(expenses);

    setTimeout(() => {
      setModal(false);
    }, 400);
  };

  return (
    <div className="App">
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <button
            className="uppercase text-white font-bold absolute right-16 top-96"
            onClick={handleNewExpense}
          >
            Add Expense
          </button>

          <main className="mt-20 text-center">
            <ExpenseList expense={expense} expenses={expenses} />
          </main>
        </>
      )}

      {modal && <Modal setModal={setModal} saveExpense={saveExpense} />}
    </div>
  );
}

export default App;
