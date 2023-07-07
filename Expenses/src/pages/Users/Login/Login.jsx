import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/Loading/Loading";
import { LoginUser } from "../../../redux/slice/authSlice";
import { toast } from "react-toastify";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(LoginUser({ email, password, navigate, toast }));
    }
  };
  return (
    <section
      style={{ height: "91vh" }}
      className="position-relative py-5  overflow-hidden bg-success"
    >
      <div className="container position-relative mx-auto">
        <div className="row align-items-center pt-5">
          <div className="col-12 col-lg-5 mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-4 text-white">
                Keep Track of what you are spending & Earning.
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center">
              <span className="text-muted">Sign In</span>
              <h3 className="fw-bold mb-5">Login to your account</h3>

              <form _lpchecked="1" onSubmit={handlerLogin}>
                <input
                  className="form-control mb-2"
                  type="email"
                  placeholder="E-mail address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="form-control mb-2"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="mt-3"
                  variant="outline-success"
                >
                  Login
                </Button>{" "}
              </form>
              <p className="mt-3 fw-bold">
                Didn't have your account?
                <Link to="/register" style={{ textDecoration: "none" }}>
                  {" "}
                  Register Now
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
