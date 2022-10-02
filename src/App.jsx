import { useState, useEffect } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ExpenseList from "./components/ExpenseList";
import Filter from "./components/Filter";
import Plus from "./img/plus.svg";
import { generateUniqueId, formatDate } from "./helpers";
import { size } from "lodash";

function App() {
  const [expenses, setExpenses] = useState(
    localStorage.getItem("expenses")
      ? JSON.parse(localStorage.getItem("expenses"))
      : []
  );
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget") ?? 0)
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [expenseEdit, setExpenseEdit] = useState({});
  const [filter, setFilter] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setModal(true);
    }
  }, [expenseEdit]);

  //Local Storage Budget
  useEffect(() => {
    localStorage.setItem("budget", budget) ?? 0;
  }, [budget]);

  //Local Storage expenses
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses) ?? []);
  }, [expenses]);

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem("budget")) ?? 0;

    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  //Filter
  useEffect(() => {
    if (filter) {
      const filteredExpenses = expenses.filter(
        (expense) => expense.category === filter
      );

      setFilteredExpenses(filteredExpenses);
    }
  }, [filter]);

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
        setExpenses={setExpenses}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />

      {isValidBudget && (
        <>
          <img
            src={Plus}
            alt="Plus"
            className="w-10 bottom-10 rigth-4 sm:w-14 sm:bottom-30 sm:right-10 cursor-pointer fixed"
            onClick={handleNewExpense}
          />
          {/* <button
            className="w-28  sm:w-40 bg-blue-600 py-2 px-6 rounded-md hover:bg-blue-700 transition-colors uppercase text-white font-bold fixed bottom-20 right-10"
            onClick={handleNewExpense}
          >
            Add Expense
          </button> */}

          <main className="mt-20 text-center">
            <Filter filter={filter} setFilter={setFilter} />
            <ExpenseList
              expenses={expenses}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
              filter={filter}
              filteredExpenses={filteredExpenses}
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
