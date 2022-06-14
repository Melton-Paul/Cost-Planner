import React from "react";
import "../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <div className="new-expense">
      {isShown ? (
        <ExpenseForm addExpense={props.addExpense} setIsShown={setIsShown} />
      ) : (
        <button
          onClick={() => {
            setIsShown(true);
          }}
        >
          Add New Expense
        </button>
      )}
    </div>
  );
}
