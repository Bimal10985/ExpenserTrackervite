import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Login from "./pages/Users/Login/Login";
import Register from "./pages/Users/Register/Register";
import IncomeList from "./pages/Income/IncomeList";
import AddIncome from "./pages/Income/AddIncome";
import ExpensesList from "./pages/Expenses/ExpensesList";
import AddExpense from "./pages/Expenses/AddExpense";
import Navbar from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/slice/authSlice";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, [user]);
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/incomelist" element={<IncomeList />} />
        <Route path="/addincome" element={<AddIncome />} />
        <Route path="/expenselist" element={<ExpensesList />} />
        <Route path="/addexpense" element={<AddExpense />} />
      </Routes>
    </>
  );
}

export default App;
