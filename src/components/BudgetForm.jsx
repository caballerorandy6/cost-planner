import { useState } from "react";
import Message from "./Message";

const BudgetForm = ({ budget, setBudget, setIsValidBudget }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (budget <= 0) {
      setMessage("Insert a valid budget");

      setTimeout(() => {
        setMessage("");
      }, 2500);
      return;
    }
    setIsValidBudget(true);
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white mt-10 sm:w-3/5 md:w-2/5  rounded-md shadow-md py-10 flex flex-col justify-center items-center absolute ">
        <h2 className="text-center text-2xl text-gray-700 font-bold  mb-4">
          Monthly Budget
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex justify-center flex-col  w-2/3"
        >
          <input
            id="inputBudget"
            type="number"
            placeholder="Add a budget. Example: 100"
            className="p-2 w-full bg-gray-100 rounded-md ring-2 text-center mb-4"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />

          <input
            type="submit"
            value="add"
            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-full p-1 mb-6 uppercase font-bold"
          />
        </form>

        {message && <Message>{message}</Message>}
      </div>
    </div>
  );
};

export default BudgetForm;
