import React from "react";
import ChartBar from "./ChartBar";
import "../styles/Chart.css";

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.Value);
  const totalMax = Math.max(...dataPointValues);
  const [isOpen, setIsOpen] = React.useState(false);

  const styles = {
    border: isOpen ? "1px solid white" : "none",
    fontSize: isOpen ? "1rem" : ".7rem",
    left: isOpen ? "5px" : "82.5%",
    top: isOpen ? "5px" : "55px",
  };

  const chartHtml = props.dataPoints.map((dataPoint) => (
    <ChartBar
      value={dataPoint.Value}
      maxValue={totalMax}
      label={dataPoint.Label}
      key={dataPoint.Label}
    />
  ));

  return (
    <div>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={styles}
          className="chart-minimize"
        >
          See Monthly Breakdown
        </button>
      )}
      {isOpen && (
        <div className="chart">
          <button
            style={styles}
            onClick={() => setIsOpen(false)}
            className="chart-minimize"
          >
            -
          </button>
          {chartHtml}
        </div>
      )}
    </div>
  );
}
