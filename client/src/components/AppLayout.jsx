import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import { Header, Sidebar } from "./index";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Header>
        <p className={styles.header_title}>Dashboard / Welcome</p>
      </Header>
      <Sidebar />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
