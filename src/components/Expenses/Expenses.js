import ExpenseItem from "./ExpenseItem";
import React from "react";
import "../styles/Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

export default function Expenses(props) {
  const expenseHtml = props.expenses.map((expense) => (
    <ExpenseItem data={expense} />
  ));

  return (
    <Card className="expenses">
      <ExpenseFilter filterYear={props.filterYear} />
      {expenseHtml.length > 0 ? (
        expenseHtml
      ) : (
        <p className="expenses-none">No costs for this year</p>
      )}
    </Card>
  );
}
