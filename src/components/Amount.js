import React from "react";
import styles from "../css/Inputs.module.css";

function Amount({ amount, changeAmount }) {
  const handleInputChange = (e) => {
    if (isNaN(parseFloat(e.target.value.replaceAll(",", "")))) {
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
    <div>
      <label htmlFor="amount">Amount</label>
      <input
        className={styles.inputStyle}
        type="text"
        onChange={handleInputChange}
        name="amount"
        value={amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
      />
    </div>
  );
}

export default Amount;
