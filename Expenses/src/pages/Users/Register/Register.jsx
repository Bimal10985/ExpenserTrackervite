import React,{useState} from "react";
import { Button } from "react-bootstrap";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterUser } from "../../../redux/slice/authSlice";
import {toast} from "react-toastify";
const Register = () => {
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleRegister=(e)=>{
    e.preventDefault();
    if(firstname && lastname && email && password){
      dispatch(RegisterUser({firstname,lastname,email,password,navigate,toast}))
    }
  }
  return (
    <section
      className="position-relative py-5 overflow-hidden  bg-success"
      style={{ height: "91vh" }}
    >
      <div className="d-none d-md-block position-absolute top-0 start-0  w-75 h-100"></div>
      <div className="d-md-none position-absolute top-0 start-0 bg-primary w-100 h-100"></div>
      <div className="container position-relative mx-auto">
        <div className="row align-items-center pt-5">
          <div className="col-12 col-lg-5 mb-5">
            <div>
              <h2 className="display-5 fw-bold mb-4 text-white">
                Keep Track of your income and expenses flow
              </h2>
            </div>
          </div>
          <div className="col-12 col-lg-5 ms-auto">
            <div className="p-5 bg-light rounded text-center">
              <form onSubmit={handleRegister}>
                <span className="text-muted">New User</span>
                <h3 className="fw-bold mb-5">Register Now</h3>
                <input
                  className="form-control mb-2"
                  type="TEXT"
                  placeholder="First Name"
                  value={firstname}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  className="form-control mb-2"
                  type="TEXT"
                  placeholder="Last Name"
                  value={lastname}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <input
                  className="form-control mb-2"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="form-control mb-2"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="outline-success">Register</Button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
