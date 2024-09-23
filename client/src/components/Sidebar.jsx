import styles from "./AppLayout.module.css";
import { dashboard, wallet, savings, expenses } from "../assets/icons";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img className={styles.logoIcon} src="./budget-icon.png"></img>
        <h4>BUDGET BUDDY</h4>
      </div>
      <nav>
        <ul className={styles.navlinks}>
          <li onClick={() => navigate("/dashboard")}>
            <img
              src={dashboard}
              alt="Dashboard Icon"
              className={styles.navIcon}
            />
            Dashboard
          </li>
          <li onClick={() => navigate("/budgets")}>
            <img src={wallet} alt="Wallet Icon" className={styles.navIcon} />
            Budgets
          </li>
          <li onClick={() => navigate("/savings")}>
            <img src={savings} alt="Savings Icon" className={styles.navIcon} />
            Savings
          </li>
          <li onClick={() => navigate("/expenses")}>
            <img
              src={expenses}
              alt="Bill List Icon"
              className={styles.navIcon}
            />
            Expenses
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
