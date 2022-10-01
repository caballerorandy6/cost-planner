import { formatQuantity } from "../helpers";
import Savings from "../img/savings.svg";
import Food from "../img/food.svg";
import Home from "../img/home.svg";
import Micellaneous from "../img/micellaneous.svg";
import Entertainment from "../img/entertainment.svg";
import Health from "../img/health.svg";
import Suscriptions from "../img/suscriptions.svg";

const iconsDictionary = {
  savings: Savings,
  food: Food,
  home: Home,
  micellaneous: Micellaneous,
  entertainment: Entertainment,
  health: Health,
  suscriptions: Suscriptions,
};

export const Expense = ({ expense, setExpenseEdit, deleteExpense }) => {
  const { name, quantity, category, date, id } = expense;
  return (
    <div className="mt-4 flex justify-center items-center">
      <div className="bg-slate-100 text-black flex  items-center w-3/6 shadow-xl p-10  rounded-lg">
        <div className="flex justify-around w-1/2">
          <img
            src={iconsDictionary[category]}
            alt="Expense Icon"
            className="w-10"
          />

          <div className="flex flex-col justify-start items-start ">
            <div>
              <h2 className="text-md text-gray-400 font-black">{`${name}`}</h2>
            </div>
            <div>
              <p className="font-bold text-2xl text-gray-600">{`${category}`}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col  text-center w-1/2">
          <div>
            <p className="font-bold text-gray-600">{`Quantity: ${formatQuantity(
              quantity
            )}`}</p>
          </div>
          <div>
            {" "}
            <p className="font-bold text-gray-600">{`Date: ${date}`}</p>
          </div>
        </div>
      </div>
      <div className="grid gap-2 ml-2">
        <button
          className="bg-green-600 hover:bg-green-700 py-1 px-4 rounded-md text-white uppercase font-bold"
          onClick={() => setExpenseEdit(expense)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 py-1 px-4 rounded-md text-white uppercase font-bold"
          onClick={() => deleteExpense(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
