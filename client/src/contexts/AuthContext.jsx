import { createContext, useContext, useReducer } from "react";
import { login, register, logout } from "../services/apiAuth";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: false,
  isLoading: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "register":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case "logout":
      return { ...state, user: null, isAuthenticated: false, isLoading: false };
    case "error":
      return {
        ...state,
        error: true,
        message: action.payload,
        isLoading: false,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, error, isLoading }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function handleLogin(email, password) {
    dispatch({ type: "loading" });
    try {
      const userData = await login({ email, password });
      dispatch({ type: "login", payload: userData });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  async function handleRegister(email, password) {
    dispatch({ type: "loading" });
    try {
      const userData = await register({ email, password });
      dispatch({ type: "register", payload: userData });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
    }
  }

  async function handleLogout() {
    dispatch({ type: "loading" });
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
        error,
        isLoading,
        handleLogin,
        handleRegister,
        handleLogout,
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
