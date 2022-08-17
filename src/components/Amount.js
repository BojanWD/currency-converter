import React from "react";
import styles from "../css/Inputs.module.css";

function Amount({ amount, changeAmount }) {
  const handleInputChange = (e) => {
    console.log(e.target.value);

    if (isNaN(e.target.value.replaceAll(",", ""))) {
      return;
    }
    if (parseFloat(e.target.value) < 0 || e.target.value === "") {
      changeAmount(0);
      return;
    }

    if (+e.target.value.replaceAll(",", "") > 1000000000000000000) {
      changeAmount(1000000000000000000);
      return;
    }

    changeAmount(parseFloat(e.target.value.replaceAll(",", "")));
  };

  return (
    <div className={styles.inputDiv}>
      <label htmlFor="amount">Amount</label>
      <input
        className={styles.inputStyle}
        type="text"
        onChange={handleInputChange}
        name="amount"
        value={amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      />
      {console.log(amount)}
    </div>
  );
}

export default Amount;
