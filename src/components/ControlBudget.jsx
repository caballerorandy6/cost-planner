import React from "react";
import { formatQuantity } from "../helpers";

const ControlBudget = ({ budget }) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white mt-10 sm:w-3/5 md:w-2/5  rounded-md shadow-md py-14 flex justify-between items-center absolute text-center">
        <p className="w-1/3">Graph Here</p>

        <div className="w-2/3 flex flex-col justify-center items-center">
          <button className="bg-blue-600 shadow-pink-800 text-white p-1 w-3/5 rounded-md uppercase font-bold mb-2">
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
              ${budget}
            </span>
          </p>
          <p className="text-black font-bold">
            Spent:{" "}
            <span className="text-gray-700 font-normal text-start">
              ${budget}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ControlBudget;
