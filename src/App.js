import styles from "./App.module.css";
import Loading from "./components/Loading";

function App() {
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
          <Loading />
        </div>
      </section>
    </main>
  );
}

export default App;
