import { Expense } from "./Expense";

const ExpenseList = ({ expense, expenses }) => {
  return (
    <div>
      <h2 className="mt-14 text-gray-700 font-black text-3xl ml-8">
        {expenses.length > 0 ? "Expenses" : "Not Expenses Yet"}
      </h2>

      {expenses.map((expense) => (
        <Expense id={expense.id} expense={expense} />
      ))}
    </div>
  );
};

export default ExpenseList;
