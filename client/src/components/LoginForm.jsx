import { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (isSignUp) {
      validatePassword(value);
    }
  };

  const validatePassword = (password) => {
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
  };

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
    setErrors([]);
  };

  return (
    <>
      <form className={styles.form_container}>
        <div className={styles.logo_container}>
          <img
            className={styles.logo}
            src="./budget-logo.png"
            alt="Budget Buddy logo"
          />
        </div>
        <div className={styles.title_container}>
          <p className={styles.title}>
            {isSignUp ? "Create an Account" : "Login to your Account"}
          </p>
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
            <img
              src="/mail-icon.svg"
              className={styles.icon}
              alt="Email Icon"
            />
            <input
              placeholder="name@mail.com"
              type="email"
              className={styles.input_field}
              id="email_field"
              aria-label="Email"
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
              />
            </div>
          </div>
        )}

        <button
          title={isSignUp ? "Sign Up" : "Sign In"}
          type="submit"
          className={styles.login_btn}
        >
          <span>{isSignUp ? "Sign Up" : "Sign In"}</span>
        </button>

        <div className={styles.separator}>
          <hr className={styles.line} />
          <span>Or</span>
          <hr className={styles.line} />
        </div>

        <button type="submit" className={styles.google_login}>
          <img src="/google-icon.svg" alt="Google Icon" />
          <span>
            {isSignUp ? "Sign Up with Google" : "Sign In with Google"}
          </span>
        </button>

        <button type="submit" className={styles.apple_login}>
          <img src="apple-icon.svg" alt="Apple Icon" />
          <span>{isSignUp ? "Sign Up with Apple" : "Sign In with Apple"}</span>
        </button>

        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <span className={styles.register} onClick={toggleForm}>
            {isSignUp ? "Sign In" : "Sign Up"}
          </span>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
