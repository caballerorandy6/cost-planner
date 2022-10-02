import { Expense } from "./Expense";

const ExpenseList = ({
  expenses,
  setExpenseEdit,
  deleteExpense,
  filter,
  filteredExpenses,
}) => {
  return (
    <div>
      {filter ? (
        <>
          <h2 className="mt-4 text-gray-700 font-black text-3xl  uppercase">
            {filteredExpenses.length > 0 ? "Expenses" : "Not Expenses Yet"}
          </h2>
          {filteredExpenses.map((expense) => (
            <Expense
              key={expense.id}
              expense={expense}
              setExpenseEdit={setExpenseEdit}
              deleteExpense={deleteExpense}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="mt-4 text-gray-700 font-black text-3xl  uppercase">
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
        </>
      )}
    </div>
  );
};

export default ExpenseList;
