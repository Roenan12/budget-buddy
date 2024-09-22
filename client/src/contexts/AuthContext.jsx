import { createContext, useContext, useReducer } from "react";
import { login, register, logout } from "../services/apiAuth";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "register":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "error":
      return { ...state, error: true, message: action.payload };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function handleLogin(email, password) {
    try {
      const userData = await login({ email, password });
      dispatch({ type: "login", payload: userData });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  async function handleRegister(email, password) {
    try {
      const userData = await register({ email, password });
      dispatch({ type: "register", payload: userData });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  async function handleLogout() {
    try {
      await logout();
      dispatch({ type: "logout" });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        handleLogin,
        handleRegister,
        handleLogout,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuthContext };
