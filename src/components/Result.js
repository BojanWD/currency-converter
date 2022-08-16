import React from "react";
import styles from "./Result.module.css";

function Result({ from, to, amount, rate }) {
  return (
    <div className={styles.resultContainer}>
      <p>{`${amount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${from} is ${(amount * rate)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${to}`}</p>
      <p className={styles.oneUnit}>{`1 ${from} is ${rate.toFixed(
        2
      )} ${to}`}</p>
      <p className={styles.oneUnit}>{`1 ${to} is ${(1 / rate).toFixed(
        2
      )} ${from}`}</p>
    </div>
  );
}

export default Result;
