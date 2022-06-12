import React from "react";
import "../styles/ExpenseForm.css";
export default function ExpenseForm(props) {
  console.log(props);
  const [form, setForm] = React.useState({
    title: "",
    amount: 0,
    date: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(form);
  }

  return (
    <div>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>
              Title
              <input
                type="text"
                value={form.title}
                name="title"
                onInput={handleInput}
              />
            </label>
          </div>
          <div className="new-expense__control">
            <label>
              Amount
              <input
                type="text"
                value={form.amount}
                name="amount"
                onInput={handleInput}
              />
            </label>
          </div>
          {/* <div className="new-expense__control">
            <label>
              Date
              <input
                type="date"
                value={form.date}
                name="date"
                onInput={handleInput}
              />
            </label>
          </div> */}
        </div>
      </form>
      <button onClick={() => props.addExpense(form)}>Add Expense</button>
    </div>
  );
}
