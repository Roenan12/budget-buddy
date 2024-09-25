import styles from "./Loader.module.css";

function Loader() {
  return (
    <div className={styles.load}>
      <div className={styles.progress}></div>
      <div className={styles.progress}></div>
      <div className={styles.progress}></div>
    </div>
  );
}

export default Loader;
