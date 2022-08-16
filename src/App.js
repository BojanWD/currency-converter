import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Loading from "./components/Loading";

function App() {
  const [amount, setAmount] = useState(1);
  const [currencyData, setCurrencyData] = useState({});
  const [rate, setRate] = useState(1);
  const [loading, setLoading] = useState(false);

  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("RSD");

  //API key
  const apiKey = "0941a3eb6f37325639f22249";

  const getCurrencies = async () => {
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from}`;
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setCurrencyData(data.conversion_rates);
      setRate(data.conversion_rates[to]);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCurrencies();
  }, [from]);

  return (
    <main className={styles.main}>
      <section className={styles.contentContainer}>
        <h1 className={styles.mainTitle}>
          Currency <br />
          Converter
        </h1>
        <h4 className={styles.subtitle}>Convert more than 160 currencies</h4>
      </section>
      <section className={styles.contentContainer}>
        <div className={styles.whiteContainer}>
          {loading && <Loading />}
          {!loading && <></>}
        </div>
      </section>
      {console.log(currencyData)}
    </main>
  );
}

export default App;
