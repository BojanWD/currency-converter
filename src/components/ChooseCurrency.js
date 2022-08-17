import React, { useEffect, useState } from "react";
import styles from "../css/Inputs.module.css";

function ChooseCurrency({ type, changeCurrency, currencies, currency }) {
  const [filteredData, setFilteredData] = useState([]);
  const [inputField, setInputField] = useState("");

  const handleSearch = (event) => {
    const searchWord = event.target.value;
    setInputField(searchWord);

    const newFilter = currencies.filter((value) => {
      return (
        value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
        value.title.toLowerCase().includes(searchWord.toLowerCase())
      );
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleSearchClick = (value) => {
    changeCurrency(value.title);
    setInputField(`${value.title}: ${value.name}`);
    setFilteredData([]);
  };

  useEffect(() => {
    let newCurrency = currencies.filter((value) => {
      return value.title === currency;
    })[0];
    setInputField(`${newCurrency.title}: ${newCurrency.name}`);
  }, [currency]);

  return (
    <div className={styles.inputDiv}>
      <label htmlFor={type}>{type}</label>
      <input
        className={styles.inputStyle}
        name={type}
        type="text"
        value={inputField}
        onChange={handleSearch}
      />
      {filteredData.length !== 0 && (
        <div className={styles.searchOptions}>
          {filteredData.slice(0, 15).map((currency, index) => {
            return (
              <div
                className={styles.searchItem}
                key={index}
                onClick={() => handleSearchClick(currency)}
              >{`${currency.title}: ${currency.name}`}</div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ChooseCurrency;
