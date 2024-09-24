import { useNavigate, useLocation } from "react-router-dom";
import styles from "./AppLayout.module.css";
import { dashboard, wallet, savings, expenses } from "../assets/icons";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img
          className={styles.logoIcon}
          src="./budget-icon.png"
          alt="Budget Buddy Logo"
        />
        <h4 className={styles.logoName}>BUDGET BUDDY</h4>
      </div>
      <nav>
        <ul className={styles.navlinks}>
          <li
            onClick={() => navigate("/dashboard")}
            className={location.pathname === "/dashboard" ? styles.active : ""}
          >
            <img
              src={dashboard}
              alt="Dashboard Icon"
              className={styles.navIcon}
            />
            Dashboard
          </li>
          <li
            onClick={() => navigate("/budgets")}
            className={location.pathname === "/budgets" ? styles.active : ""}
          >
            <img src={wallet} alt="Wallet Icon" className={styles.navIcon} />
            Budgets
          </li>
          <li
            onClick={() => navigate("/savings")}
            className={location.pathname === "/savings" ? styles.active : ""}
          >
            <img src={savings} alt="Savings Icon" className={styles.navIcon} />
            Savings
          </li>
          <li
            onClick={() => navigate("/expenses")}
            className={location.pathname === "/expenses" ? styles.active : ""}
          >
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
