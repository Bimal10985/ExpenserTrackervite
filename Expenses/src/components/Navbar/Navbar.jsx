import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { setLogout } from "../../redux/slice/authSlice";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logouthandler = () => {
    dispatch(setLogout());
    navigate("/login");
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <i className="bi bi-currency-exchange fs-1 text-warning "></i>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item mb-2">
                <Link
                  to="/addexpense"
                  className="btn  btn-outline-warning me-2"
                >
                  New Expense
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/addincome" className="btn  btn-outline-primary me-2">
                  New Income
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to="/login" className="btn btn-outline-secondary me-2">
                Sign In
              </Link>
              <Link to="/register" className="btn btn-primary me-2">
                Sign Up
              </Link>
              <Button onClick={logouthandler} className="btn btn-primary">
                Log Out
              </Button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
