import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EditExpense,
  allExpense,
  deleteExpense,
  getSingleExpense,
} from "../../redux/slice/expenseSlice";

import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import Moment from "react-moment";

const ExpensesList = () => {
  const [editId, setEditID] = useState(null);
  console.log(editId);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const { expensesArr, expenses, success } = useSelector(
    (state) => state.expense
  );
  const deleteSingleExpense = (id) => {
    if (window.confirm("Are you sure want to delete this expense?")) {
      dispatch(deleteExpense({ id, toast }));
    }
  };
  const handleEditExpense = (id) => {
    handleShow();
    setEditID(id);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(EditExpense({ id: editId, name, description, amount, toast }));
    handleClose();
  };
  useEffect(() => {
    if (editId) {
      dispatch(getSingleExpense(editId));
    }
  }, [editId]);
  useEffect(() => {
    if (success) {
      setName(expenses?.expenses?.name);
      setDescription(expenses?.expenses?.description);
      setAmount(expenses?.expenses?.amount);
    }
  }, [success]);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    dispatch(allExpense());
  }, []);
  useEffect(() => {
    if (success) {
      dispatch(allExpense());
    }
  }, [success]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleEdit}>
            <div className="mb-3 input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Title"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3 input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-3 input-group">
              <input
                className="form-control"
                type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <Button className="me-2" variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" type="Submit">
              Edit
            </Button>
          </form>
        </Modal.Body>
      </Modal>
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
            <table className="table">
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
                {expensesArr?.expenses?.length <= 0 ? (
                  <h2>No Income Found</h2>
                ) : (
                  expensesArr?.expenses?.map((elm) => {
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
                            <Button
                              variant="success"
                              onClick={() => handleEditExpense(elm?._id)}
                            >
                              <AiFillEdit />
                            </Button>{" "}
                            <Button
                              variant="danger"
                              onClick={() => deleteSingleExpense(elm?._id)}
                            >
                              <AiFillDelete />
                            </Button>
                          </td>
                        </tr>
                      </>
                    );
                  })
                )}
              </tbody>
            </table>
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
