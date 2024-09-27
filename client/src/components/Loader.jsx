import styles from "./Loader.module.css";

function Loader({ color = "white" }) {
  return (
    <div className={styles.load}>
      <div
        className={`${styles.progress} ${
          color === "black" ? styles.black : styles.white
        }`}
      ></div>
      <div
        className={`${styles.progress} ${
          color === "black" ? styles.black : styles.white
        }`}
      ></div>
      <div
        className={`${styles.progress} ${
          color === "black" ? styles.black : styles.white
        }`}
      ></div>
    </div>
  );
}

export default Loader;
