import "../styles/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  const { data } = props;
  const expenseTitle = data.title;
  const expenseAmount = data.amount;
  console.log(data);

  return (
    <Card className="expense-item">
      <ExpenseDate date={data.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button
        className="expense-item__delete"
        onClick={() => props.deleteEntry(data.id)}
      >
        x
      </button>
    </Card>
  );
}
