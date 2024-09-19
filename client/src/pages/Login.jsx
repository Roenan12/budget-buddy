import { LoginForm } from "../components";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.login}>
      <LoginForm />
    </div>
  );
}

export default Login;
