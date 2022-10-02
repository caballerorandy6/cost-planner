import { formatQuantity } from "../helpers";
import { ReactComponent as Savings } from "../img/savings.svg";
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
  const { category, name, quantity, date, id } = expense;
  return (
    <div className="w-11/12 mx-auto md:w-5/6 lg:w-6/12 bg-slate-100 text-black flex flex-col justify-center  items-center shadow-xl pt-8 mb-4 rounded-lg">
      <div className="w-full flex justify-around col">
        <div className="flex justify-around items-center w-2/3">
          <img
            src={iconsDictionary[category]}
            alt="Expense Icon"
            className="w-0 sm:w-"
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

        <div className="flex flex-col justify-center items-start  text-center w-1/3">
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

      <div className="w-4/5 flex justify-around p-6 mt-6 border-t-2 border-slate-300">
        <button
          className="bg-green-600 hover:bg-green-700 py-2 px-8 rounded-md text-white uppercase font-bold transition-colors"
          onClick={() => setExpenseEdit(expense)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 hover:bg-red-700 py-2 px-4 rounded-md text-white uppercase font-bold transition-colors"
          onClick={() => deleteExpense(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
