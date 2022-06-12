import React from "react";
import "../styles/NewExpense.css";
import ExpenseForm from "./ExpenseForm";

export default function NewExpense(props) {
  return (
    <div className="new-expense">
      <ExpenseForm addExpense={props.addExpense} />
    </div>
  );
}
