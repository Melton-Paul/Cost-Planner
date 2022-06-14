import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import "./components/styles/App.css";

function App() {
  const [data, setData] = React.useState(
    JSON.parse(localStorage.getItem("data") || [])
  );
  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(() => {
    setFilteredData(data);
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  function filterYear(year) {
    if (year == "All") {
      setFilteredData(data);
    } else {
      const filtered = data.filter((item) => {
        return new Date(item.date).getFullYear() == year;
      });
      setFilteredData(filtered);
    }
  }

  function deleteEntry(id) {
    setData((prev) => {
      return prev.filter((entry) => entry.id !== id);
    });
  }

  function addExpense(newData) {
    setData((prev) => [...prev, newData]);
  }

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses
        expenses={filteredData}
        filterYear={filterYear}
        deleteEntry={deleteEntry}
      />
    </div>
  );
}

export default App;
