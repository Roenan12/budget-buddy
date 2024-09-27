import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import styles from "./LoginForm.module.css";
import { Button, Loader } from "./index";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { handleLogin, handleRegister, isAuthenticated, isLoading } =
    useAuthContext();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("new@mail.com");
  const [password, setPassword] = useState("Qwerty123@");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  function togglePasswordVisibility() {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }

  function handlePasswordChange(e) {
    const value = e.target.value;
    setPassword(value);
    if (isSignUp) {
      validatePassword(value);
    }
  }

  function validatePassword(password) {
    const errors = [];
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one capital letter.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one number.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>_]/.test(password)) {
      errors.push("Password must contain at least one symbol.");
    }
    setErrors(errors);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSignUp) {
      if (password !== confirmPassword) {
        setErrors(["Passwords do not match"]);
        return;
      }
      await handleRegister(email, password);
    } else {
      await handleLogin(email, password);
    }
  }

  return (
    <form className={styles.form_container} onSubmit={handleSubmit}>
      <div className={styles.logo_container}>
        <img
          className={styles.logo}
          src="./budget-logo.png"
          alt="Budget Buddy logo"
        />
      </div>

      <div className={styles.title_container}>
        <h5 className={styles.title}>
          {isSignUp ? "Create an Account" : "Login to your Account"}
        </h5>
        <span className={styles.subtitle}>
          {isSignUp
            ? "Sign up to get started with our app."
            : "Get started with our app, just create an account and enjoy your experience."}
        </span>
      </div>

      <div className={styles.input_container}>
        <label className={styles.input_label} htmlFor="email_field">
          Email
        </label>
        <div className={styles.input_wrapper}>
          <img src="/mail-icon.svg" className={styles.icon} alt="Email Icon" />
          <input
            placeholder="name@mail.com"
            type="email"
            className={styles.input_field}
            id="email_field"
            aria-label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.input_container}>
        <label className={styles.input_label} htmlFor="password_field">
          Password
        </label>
        <div className={styles.input_wrapper}>
          <img
            src="/password-icon.svg"
            className={styles.icon}
            alt="Password Icon"
          />
          <input
            placeholder="password"
            type={showPassword ? "text" : "password"}
            className={styles.input_field}
            id="password_field"
            aria-label="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          {password && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={styles.toggle_btn}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          )}
        </div>

        {isSignUp && errors.length > 0 && (
          <div className={styles.error_tooltip}>
            {errors.map((error, index) => (
              <p key={index} className={styles.error_message}>
                {error}
              </p>
            ))}
          </div>
        )}
      </div>

      {isSignUp && (
        <div className={styles.input_container}>
          <label
            className={styles.input_label}
            htmlFor="confirm_password_field"
          >
            Confirm Password
          </label>
          <div className={styles.input_wrapper}>
            <img
              src="/password-icon.svg"
              className={styles.icon}
              alt="Password Icon"
            />
            <input
              placeholder="re-enter password"
              type={showPassword ? "text" : "password"}
              className={styles.input_field}
              id="confirm_password_field"
              aria-label="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
      )}

      <Button type="login_btn" disabled={isLoading}>
        {isLoading ? (
          <Loader color="white" />
        ) : (
          <span>{isSignUp ? "Sign Up" : "Sign In"}</span>
        )}
      </Button>

      <div className={styles.separator}>
        <hr className={styles.line} />
        <span>Or</span>
        <hr className={styles.line} />
      </div>

      <Button type="google_login">
        <img
          className={styles.login_icon}
          src="/google-icon.svg"
          alt="Google Icon"
        />
        <span>{isSignUp ? "Sign Up with Google" : "Sign In with Google"}</span>
      </Button>

      <Button type="apple_login">
        <img
          className={styles.login_icon}
          src="/apple-icon.svg"
          alt="Apple Icon"
        />
        <span>{isSignUp ? "Sign Up with Apple" : "Sign In with Apple"}</span>
      </Button>

      <p>
        {isSignUp ? "Already have an account?" : "Don't have an account?"}
        <span
          className={styles.register}
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Sign In" : "Sign Up"}
        </span>
      </p>
    </form>
  );
}

export default LoginForm;
