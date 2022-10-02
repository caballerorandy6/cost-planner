import BudgetForm from "./BudgetForm";
import ControlBudget from "./ControlBudget";

const Header = ({
  expenses,
  setExpenses,
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) => {
  return (
    <div className="bg-gray-800 static pb-60 ">
      <h1 className="text-center text-5xl text-white font-black uppercase pt-10">
        Monthly Expense Planner
      </h1>
      {isValidBudget ? (
        <ControlBudget
          expenses={expenses}
          budget={budget}
          setBudget={setBudget}
          setExpenses={setExpenses}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <BudgetForm
          budget={budget}
          setBudget={setBudget}
          isValidBudget={isValidBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </div>
  );
};

export default Header;
