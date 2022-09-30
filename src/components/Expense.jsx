import { formatQuantity } from "../helpers";
import Savings from "../img/savings.svg";
export const Expense = ({ expense }) => {
  const { name, quantity, category, date, id } = expense;
  return (
    <div className="mt-4 flex justify-center items-center">
      <div className="bg-gray-50 text-black flex justify-evenly items-center w-2/3 shadow-xl p-10  rounded-lg">
        <div className="flex justify-evenly items-center">
          <div>
            <img src={Savings} alt="savings" className="w-20" />
          </div>
          <div className="flex flex-col justify-start items-start w-2/5">
            <div>
              <h2 className="text-md text-gray-400 font-black">{`${name}`}</h2>
            </div>
            <div>
              <p className="font-bold text-2xl text-gray-600">{`${category}`}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center w-3/5">
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
    </div>
  );
};
