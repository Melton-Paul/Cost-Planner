import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = React.useState(data);

  React.useEffect(() => {
    setFilteredData(data);
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

  function addExpense(newData) {
    setData((prev) => [...prev, newData]);
  }

  return (
    <div>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={filteredData} filterYear={filterYear} />
    </div>
  );
}

export default App;
