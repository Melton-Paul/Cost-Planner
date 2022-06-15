import React from "react";
import styles from "../styles/ChartBar.module.css";

export default function ChartBar(props) {
  const style = {
    height:
      props.maxValue > 0 ? `${(props.value / props.maxValue) * 100}%` : "0%",
  };

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div className={styles["chart-bar__fill"]} style={style}></div>
      </div>
      <div className={styles["chart-bar__label"]}>{props.label}</div>
    </div>
  );
}
