import styles from "../styles/ExpenseDate.module.css";
import Card from "../UI/Card";

export default function ExpenseDate(props) {
  const date = new Date(props.date);

  let expenseDate = {
    month: "",
    day: "",
    year: "",
  };

  if (date) {
    expenseDate = {
      month: date.toLocaleString("en-US", { month: "long" }),
      day: date.toLocaleString("en-US", { day: "2-digit" }),
      year: date.getFullYear(),
    };
  }
  return (
    <Card className={styles.expenseDate}>
      <span className={styles.expenseDate__month}>{expenseDate.month}</span>
      <span className={styles.expenseDate__day}>{expenseDate.day}th</span>
      <span className={styles.expenseDate__year}>{expenseDate.year}</span>
    </Card>
  );
}
