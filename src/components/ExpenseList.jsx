import { Expense } from "./Expense";

const ExpenseList = ({ expenses, setExpenseEdit, deleteExpense }) => {
  return (
    <div>
      <h2 className="mt-14 text-gray-700 font-black text-3xl ml-8 uppercase">
        {expenses.length > 0 ? "Expenses" : "Not Expenses Yet"}
      </h2>

      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          expense={expense}
          setExpenseEdit={setExpenseEdit}
          deleteExpense={deleteExpense}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
