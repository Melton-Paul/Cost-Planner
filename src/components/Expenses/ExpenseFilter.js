import React from "react";
import "../styles/Expenses.css";

export default function ExpenseFilter(props) {
  const [filter, setFilter] = React.useState("");

  function handleChange(e) {
    const { value } = e.target;
    setFilter(value);
    props.filterYear(value);
  }

  return (
    <div>
      <div className="expenses-filter">
        <label>Filter by year</label>
        <select
          name="years"
          value={filter}
          onChange={handleChange}
          className="expenses-filter__input"
        >
          <option name="year" value="All">
            All Years
          </option>
          <option name="year" value="2019">
            2019
          </option>
          <option name="year" value="2020">
            2020
          </option>
          <option name="year" value="2021">
            2021
          </option>
          <option name="year" value="2022">
            2022
          </option>
        </select>
      </div>
    </div>
  );
}
