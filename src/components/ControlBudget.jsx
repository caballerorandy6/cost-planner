import { useState, useEffect } from "react";
import { formatQuantity } from "../helpers";

const ControlBudget = ({ budget, expenses }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.quantity + total,
      0
    );
    setSpent(totalSpent);
  }, [expenses]);

  return (
    <div className="flex justify-center">
      <div className="bg-gray-100 mt-10 sm:w-3/5 md:w-2/5  rounded-md shadow-md py-14 flex justify-between items-center absolute text-center">
        <p className="w-1/3">Graph Here</p>

        <div className="w-2/3 flex flex-col justify-center items-center">
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white p-1 w-2/5 rounded-md uppercase font-bold mb-2">
            Reset app
          </button>
          <p className="text-black font-bold">
            Budget:{" "}
            <span className="text-gray-700 font-normal text-start">
              ${formatQuantity(budget)}
            </span>
          </p>
          <p className="text-black font-bold">
            Available:{" "}
            <span className="text-gray-700 font-normal text-start">
              {formatQuantity(budget - spent)}
            </span>
          </p>
          <p className="text-black font-bold">
            Spent:{" "}
            <span className="text-gray-700 font-normal text-start">
              {formatQuantity(spent)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ControlBudget;
