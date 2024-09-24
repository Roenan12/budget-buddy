import { Link } from "react-router-dom";
import Card from "../components/Card";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <h3 className="accent-2">Dashboard</h3>
      <div className={styles.grid_container}>
        <div className={styles.card_span}>
          <Card>
            <h2 className={styles.card_title}>Budgets</h2>
            <p className={styles.card_content}>$ 25000</p>
            <Link to="/budgets" className={styles.nav_text}>
              Add or manage budgets
            </Link>
          </Card>
        </div>
        <Card>
          <h2 className={styles.card_title}>Savings</h2>
          <p className={styles.card_content}>%XXXX%</p>
          <Link to="/savings" className={styles.nav_text}>
            Add or manage savings
          </Link>
        </Card>
        <Card>
          <h2 className={styles.card_title}>Expenses</h2>
          <p className={styles.card_content}>%XXXX%</p>
          <Link to="/expenses" className={styles.nav_text}>
            Add or manage expenses
          </Link>
        </Card>
      </div>
    </div>
  );
}

export default Dashboard;
