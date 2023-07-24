import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Users/Login/Login";
import Register from "./pages/Users/Register/Register";
import IncomeList from "./pages/Income/IncomeList";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

function App() {
  // axios.defaults.baseURL = "http://localhost:5000";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-income" element={<IncomeList />} />
      </Routes>
    </>
  );
}

export default App;
