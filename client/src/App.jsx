import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  Dashboard,
  Budgets,
  Savings,
  Expenses,
  PageNotFound,
} from "./pages";
import { AuthProvider } from "./contexts/AuthContext";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />

            <Route element={<AppLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/budgets" element={<Budgets />} />
              <Route path="/savings" element={<Savings />} />
              <Route path="/expenses" element={<Expenses />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
