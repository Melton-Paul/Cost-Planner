import "../styles/ExpenseDate.css";
import Card from "../UI/Card";

export default function ExpenseDate(props) {
  let expenseDate = {
    month: "",
    day: "",
    year: "",
  };

  if (props.date) {
    expenseDate = {
      month: props.date.toLocaleString("en-US", { month: "long" }),
      day: props.date.toLocaleString("en-US", { day: "2-digit" }),
      year: props.date.getFullYear(),
    };
  }
  return (
    <Card className="expense-date">
      <span className="expense-date__month">{expenseDate.month}</span>
      <span className="expense-date__day">{expenseDate.day}th</span>
      <span className="expense-date__year">{expenseDate.year}</span>
    </Card>
  );
}
