import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Users/Login/Login";
import Register from "./pages/Users/Register/Register";
import IncomeList from "./pages/Income/IncomeList";
import AddIncome from "./pages/Income/AddIncome";
import ExpensesList from "./pages/Expenses/ExpensesList";
import AddExpense from "./pages/Expenses/AddExpense";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/incomelist" element={<IncomeList />} />
        <Route path="/addincome" element={<AddIncome />} />
        <Route path="/expenseslist" element={<ExpensesList />} />
        <Route path="/addexpense" element={<AddExpense />} />



      </Routes>
    </>
  );
}

export default App;
