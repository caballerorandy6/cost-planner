import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconNewSpent from "./img/add-spent.svg";

function App() {
  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNewExpense = () => {
    setModal(true);
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
        <button
          className="uppercase text-white font-bold absolute right-10 mt-10"
          onClick={handleNewExpense}
        >
          Add Expense
        </button>
      )}

      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default App;
