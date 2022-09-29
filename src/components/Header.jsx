import BudgetForm from "./BudgetForm";
import ControlBudget from "./ControlBudget";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <div className="bg-gray-800 static pb-60 md:w-full ">
      <h1 className="text-center text-5xl text-white font-black uppercase pt-10">
        Monthly Expense Planner
      </h1>
      {isValidBudget ? (
        <ControlBudget budget={budget} />
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
