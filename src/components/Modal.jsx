import { useState, useEffect } from "react";
import Message from "./Message";
import CloseModal from "../img/close.svg";

const Modal = ({
  setModal,
  setExpenses,
  saveExpense,
  expenseEdit,
  setExpenseEdit,
}) => {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [id, setId] = useState("");

  //Fill the fields in Modal when click occurs
  useEffect(() => {
    if (Object.keys(expenseEdit).length > 0) {
      setName(expenseEdit.name);
      setQuantity(expenseEdit.quantity);
      setCategory(expenseEdit.category);
      setDate(expenseEdit.date);
      setId(expenseEdit.id);
    }
  }, []);

  const closeModal = () => {
    setModal(false);
    setExpenseEdit({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, quantity, category].includes("")) {
      setMessage("All fields are required!");

      setTimeout(() => {
        setMessage("");
      }, 2500);
      return;
    }

    saveExpense({ name, quantity, category, date, id });
  };

  return (
    <div className="absolute bg-black bg-opacity-90 top-0 left-0 right-0 bottom-0 ">
      <div>
        <img
          src={CloseModal}
          alt="Close Modal"
          className="w-10 cursor-pointer -right-2 mt-10 mr-10 absolute"
          onClick={closeModal}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-4/6 sm:w-3/6 lg:w-2/6 mx-auto align-middle flex flex-col mt-20"
      >
        <legend className="text-white text-3xl text-center p-2 mb-4 border-b-2 border-blue-900">
          {expenseEdit.name ? "Edit Expense" : "New Expense"}
        </legend>

        {message && <Message>{message}</Message>}

        <div>
          <label htmlFor="name" className="text-white text-xl block p-2">
            Expense Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Add expense name"
            className="w-full p-1 mb-2 rounded hover:bg-gray-100 transition-colors"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="quantity" className="text-white text-xl block p-2">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            placeholder="Add the amount of the expense. Example: 300"
            className="w-full p-1 mb-2 rounded hover:bg-gray-100 transition-colors"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="quantity" className="text-white text-xl block p-2">
            Category
          </label>
          <select
            name="category"
            id="category"
            className="w-full p-1 mb-2 rounded hover:bg-gray-100 transition-colors text-center"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="Savings">Savings</option>
            <option value="Food">Food</option>
            <option value="Home">Home</option>
            <option value="Micellaneous">Micellaneous</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Health">Health</option>
            <option value="Suscriptions">Suscriptions</option>
          </select>
        </div>
        <input
          type="submit"
          className="bg-blue-600 text-white p-1 mt-2 uppercase font-bold hover:bg-blue-700 transition-colors cursor-pointer"
          value={expenseEdit.name ? "Save Changes" : "Add Expense"}
        />
      </form>
    </div>
  );
};

export default Modal;
