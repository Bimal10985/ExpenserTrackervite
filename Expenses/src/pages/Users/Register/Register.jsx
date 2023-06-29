import React from "react";
import { Button } from "react-bootstrap";

const Register = () => {
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
              <form>
                <span className="text-muted">New User</span>
                <h3 className="fw-bold mb-5">Register</h3>
                <input
                  className="form-control mb-2"
                  type="TEXT"
                  placeholder="Last Name"
                />
                <input
                  className="form-control mb-2"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="form-control mb-2"
                  type="password"
                  placeholder="Password"
                />
                <Button variant="outline-success">Register</Button>{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
