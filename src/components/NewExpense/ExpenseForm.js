import React from "react";
import { nanoid } from "nanoid";
import "../styles/ExpenseForm.css";
export default function ExpenseForm(props) {
  const [form, setForm] = React.useState({
    title: "",
    amount: 0,
    date: "",
    id: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    if (name === "amount") {
      if (value < 0 || value > 999999) {
        return;
      }
      setForm((prev) => {
        return { ...prev, amount: +value, id: nanoid() };
      });
    } else {
      setForm((prev) => {
        return { ...prev, [name]: value, id: nanoid() };
      });
    }
  }

  function onFormSubmit(e) {
    e.preventDefault();
    props.addExpense(form);
    setForm({
      title: "",
      amount: 0,
      date: "",
      id: "",
    });
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>
              Title
              <input
                required
                type="text"
                value={form.title}
                name="title"
                onInput={handleInput}
                placeholder="Name of cost"
              />
            </label>
          </div>
          <div className="new-expense__control">
            <label>
              Amount
              <input
                required
                type="number"
                value={form.amount}
                min=".01"
                step=".01"
                name="amount"
                onInput={handleInput}
              />
            </label>
          </div>
          <div className="new-expense__control">
            <label>
              Date
              <input
                required
                type="date"
                value={form.date}
                name="date"
                onInput={handleInput}
                min="2019-01-01"
                max="2022-12-31"
              />
            </label>
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={() => props.setIsShown(false)}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
