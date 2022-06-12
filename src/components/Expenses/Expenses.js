import ExpenseItem from "./ExpenseItem";
import React from "react";
import "../styles/Expenses.css";
import Card from "../UI/Card";
import NewExpense from "../NewExpense/NewExpense";

export default function Expenses(props) {
  console.log(props.expenses);
  const expenseHtml = props.expenses.map((expense) => (
    <ExpenseItem data={expense} />
  ));

  return (
    <Card className="expenses">
      {expenseHtml}
      <NewExpense addExpense={props.addExpense} />
    </Card>
  );
}
