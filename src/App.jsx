import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";
import { generateUniqueId, formatDate } from "./helpers";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [expenseEdit, setExpenseEdit] = useState({});

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);
    }
  }, [expenseEdit]);

  const handleNewExpense = () => {
    setModal(true);
    setExpenseEdit({});
  };

  const saveExpense = (expense) => {
    if (expense.id) {
      //Update
      const updatedExpenses = expenses.map((stateExpense) =>
        stateExpense.id === expense.id ? expense : stateExpense
      );
      setExpenses(updatedExpenses);
    } else {
      //New expense
      expense.id = generateUniqueId();
      expense.date = formatDate(Date.now());
      setExpenses([...expenses, expense]);
    }
    setModal(false);
  };

  //Delete
  const deleteExpense = (id) => {
    const deleted = expenses.filter((expense) => expense.id !== id);
    setExpenses(deleted);
  };

  return (
    <div className={modal ? "overflow-hidden h-screen" : ""}>
      <Header
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <button
            className="bg-blue-600 py-2 px-6 rounded-md hover:bg-blue-700 transition-colors uppercase text-white font-bold fixed bottom-20 right-10"
            onClick={handleNewExpense}
          >
            Add Expense
          </button>

          <main className="mt-20 text-center">
            <ExpenseList
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
            />
          </main>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          saveExpense={saveExpense}
          expenseEdit={expenseEdit}
          setExpenseEdit={setExpenseEdit}
        />
      )}
    </div>
  );
}

export default App;
