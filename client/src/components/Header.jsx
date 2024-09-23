import styles from "./AppLayout.module.css";

function Header({ children }) {
  return <header className={styles.header}>{children}</header>;
}

export default Header;
