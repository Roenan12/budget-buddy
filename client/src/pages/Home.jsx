import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import illustration from "../assets/illustration.png";

function Home() {
  return (
    <div className={styles.home}>
      <div>
        <h2 className={styles.title}>Budget Buddy</h2>
        <h3>
          Take Control of <span className="accent">Your Money</span>
        </h3>
        <h5>
          Manage your personal budgets efficiently. Start your journey now.
        </h5>
        <Link to="/login" className={styles.cta}>
          GET STARTED
        </Link>
      </div>
      <img
        src={illustration}
        alt="Person with money"
        className={styles.illustration}
      />
    </div>
  );
}

export default Home;
