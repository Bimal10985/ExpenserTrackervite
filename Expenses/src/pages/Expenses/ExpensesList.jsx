import React, { useEffect, useState } from "react";
// import { Container, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allExpense } from "../../redux/slice/expenseSlice";

// import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// import { toast } from "react-toastify";
// import Moment from "react-moment";

const ExpensesList = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  
  useEffect(() => {
    dispatch(allExpense());
  }, []);
  return (
    <>
      <section className="py-6 mt-5">
        <div className="container">
          <div className="position-relative border rounded-2 p-5">
            <a className="position-absolute top-0 end-0 mt-4 me-4" href="#"></a>
            <div className="pt-8 px-8 mb-8">
              <h6 className="mb-0 fs-1 fw-bold">Recent Expense transactions</h6>
              <p className="mb-3 mt-4">
                Below is the history of your expense transactions records
              </p>
              <Link
                to="/addexpense"
                className="btn  btn-outline-danger me-2 m-2"
              >
                New Expense
              </Link>
            </div>
            {/* <table className="table">
                <thead>
                  <tr className="table-active">
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small className="text-center">Deposited By</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Title</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Description</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Amount</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Date</small>
                      </button>
                    </th>
                    <th scope="col">
                      <button className="btn d-flex align-items-centerr text-uppercase">
                        <small>Action</small>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {incomes?.incomes?.length <= 0 ? (
                    <h2>No Income Found</h2>
                  ) : (
                    incomes?.incomes?.map((elm) => {
                      return (
                        <>
                          <tr>
                            <td>{elm?.name}</td>

                            <td>{elm?.name}</td>
                            <td>{elm?.description}</td>
                            <td>{elm?.amount}</td>
                            <td>
                              <Moment format="YYYY/MM/DD">
                                {elm?.createdAt}
                              </Moment>
                            </td>

                            <td>
                              {" "}
                              <Button
                                variant="success"
                                onClick={() => handleEditIncome(elm?._id)}
                              >
                                <AiFillEdit />
                              </Button>{" "}
                              <Button
                                variant="danger"
                                onClick={() => deleteSingleIncome(elm?._id)}
                              >
                                <AiFillDelete />
                              </Button>{" "}
                            </td>
                          </tr>
                        </>
                      );
                    })
                  )}
                </tbody>
              </table> */}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
        ></div>
      </section>
    </>
  );
};

export default ExpensesList;
