import { useState, useEffect } from "react";
import styles from "./App.module.css";
import Loading from "./components/Loading";
import Result from "./components/Result";

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

  useEffect(() => {
    setRate(currencyData[to]);
  }, [to]);

  const switchCurrencies = () => {
    let tempTo = to;
    let tempFrom = from;
    setTo((pS) => tempFrom);
    setFrom((pS) => tempTo);
  };

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
          {!loading && (
            <>
              <h3 className={styles.ccSubtitle}>Convert currencies</h3>
              <Result from={from} to={to} rate={rate} amount={amount} />
            </>
          )}
        </div>
      </section>
      {console.log(currencyData)}
    </main>
  );
}

export default App;
