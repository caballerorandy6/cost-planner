import { useState } from "react";
import Message from "./Message";

const BudgetForm = ({ budget, setBudget }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (budget <= 0) {
      setMessage("Please, enter a valid budget!");
      setTimeout(() => {
        setMessage("");
      }, 2500);
      return;
    }
    console.log("no empty");
  };

  return (
    <section className="flex justify-center">
      <article className="bg-white mt-10 md:w-2/5  rounded-md shadow-md pb-20 flex flex-col justify-center items-center absolute ">
        <header>
          <h2 className="text-center text-2xl text-gray-700 font-bold pt-16 mb-4">
            Monthly Budget
          </h2>
        </header>

        <form className="flex justify-center mb-4 w-2/3">
          <input
            id="inputBudget"
            type="number"
            className="p-2 w-full bg-gray-100 rounded-md ring-2 text-center"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
          />
        </form>

        <input
          type="submit"
          value="add"
          className="bg-blue-600 text-white hover:bg-blue-700 transition-colors w-2/3 p-1 uppercase font-bold"
          onClick={handleSubmit}
        />
        {message && <Message>{message}</Message>}
      </article>
    </section>
  );
};

export default BudgetForm;
