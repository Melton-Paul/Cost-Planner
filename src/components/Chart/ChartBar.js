import React from "react";
import "../styles/ChartBar.css";

export default function ChartBar(props) {
  const styles = {
    height:
      props.maxValue > 0 ? `${(props.value / props.maxValue) * 100}%` : "0%",
  };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={styles}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}
