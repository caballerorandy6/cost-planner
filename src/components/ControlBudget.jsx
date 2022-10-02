import { useState, useEffect } from "react";
import { formatQuantity } from "../helpers";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import RadialSeparators from "./RadialSeparators";
import "react-circular-progressbar/dist/styles.css";

const ControlBudget = ({
  budget,
  expenses,
  setBudget,
  setExpenses,
  setIsValidBudget,
}) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.quantity + total,
      0
    );
    setSpent(totalSpent);

    const totalAvailable = budget - totalSpent;
    setAvailable(totalAvailable);
  }, [expenses]);

  const percentageSpent = (100 * spent) / budget;

  const handleResetApp = () => {
    const result = confirm("Do you want to reset the budget and expenses?");
    if (result) {
      setBudget(0);
      setExpenses([]);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-11/12 sm:w-3/5 sm:py-10 md:w-3/5 md:items-center md:py-10 lg:w-6/12 lg:justify-around bg-gray-100 mt-10 rounded-md shadow-md py-16 flex  justify-center absolute text-center">
        <div className="w-0 sm:w-40 ">
          <CircularProgressbarWithChildren
            value={percentageSpent}
            text={`${Number(percentageSpent)}% Spent`}
            strokeWidth={10}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: percentageSpent > 100 ? "#DC2626" : "#3B82F6",
              textSize: "12px",
              textColor: percentageSpent > 100 ? "#DC2626" : "#3B82F6",
              trailColor: "rgb(173, 216, 230)",
            })}
          >
            <RadialSeparators
              count={12}
              style={{
                background: "#fff",
                width: "2px",
                // This needs to be equal to props.strokeWidth
                height: `${10}%`,
              }}
            />
          </CircularProgressbarWithChildren>
        </div>

        <div className="w-1/2  flex flex-col justify-center items-center">
          <button
            className="w-11/12 sm:w-3/5 md:w-7/12 lg:w-5/12 bg-pink-600 hover:bg-pink-700 transition-colors text-white p-1 rounded-md uppercase font-bold mb-2"
            onClick={handleResetApp}
          >
            Reset app
          </button>
          <p className="text-black font-bold">
            Budget:{" "}
            <span className="text-gray-700 font-normal text-start">
              {formatQuantity(budget)}
            </span>
          </p>
          <p
            className={
              available < 0 ? "text-red-700 font-bold" : "text-black font-bold"
            }
          >
            Available:{" "}
            <span
              className={
                available < 0
                  ? "text-red-700 font-normal"
                  : "text-gray-700 font-normal text-start"
              }
            >
              {formatQuantity(available)}
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
