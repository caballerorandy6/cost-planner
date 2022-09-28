import BudgetForm from "./BudgetForm";

const Header = ({ budget, setBudget }) => {
  return (
    <div className="bg-gray-800 static pb-60 md:w-full ">
      <h1 className="text-center text-5xl text-white font-black uppercase pt-10">
        Monthly Expense Planner
      </h1>
      <BudgetForm budget={budget} setBudget={setBudget} />
    </div>
  );
};

export default Header;
