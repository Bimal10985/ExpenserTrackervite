import React, { useEffect, useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  EditIncome,
  allIncome,
  deleteIncome,
  getSingleIncome,
} from "../../redux/slice/incomeSlice";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import Moment from "react-moment";

const IncomeList = () => {
  const [editId, setEditID] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { incomes, incomess, success } = useSelector((state) => state.income);
  const deleteSingleIncome = (id) => {
    if (window.confirm("Are you sure want to delete this income?")) {
      dispatch(deleteIncome({ id, toast }));
    }
  };
  const handleEditIncome = (id) => {
    handleShow();
    setEditID(id);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(EditIncome({ id: editId, name, description, amount, toast }));
    handleClose();
  };
  useEffect(() => {
    dispatch(allIncome());
  }, []);
  useEffect(() => {
    if (editId) {
      dispatch(getSingleIncome(editId));
    }
  }, [editId]);
  useEffect(() => {
    if (success) {
      setName(incomess?.incomes?.name);
      setDescription(incomess?.incomes?.description);
      setAmount(incomess?.incomes?.amount);
    }
  }, [success]);
  useEffect(() => {
    if (success) {
      dispatch(allIncome());
    }
  }, [success]);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Income</Modal.Title>
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
      <Container>
        <section className="py-6 mt-5">
          <div className="container-fluid">
            <div className="position-relative border rounded-2 p-5">
              <div className="pt-8 px-8 mb-8">
                <h1 className="mb-0 fs-1 fw-bold">
                  Recent Income transactions
                </h1>
                <p className="mb-3 mt-4">
                  Below is the history of your income transactions records
                </p>
                <Link
                  to="/addincome"
                  className="btn  btn-success me-2 mt-2 mb-4"
                >
                  New Income
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
          >
            {/* {incomeList?.docs?.length > 1 && (
            <AppPagination setPage={setPage} items={incomeList?.totalPages} />
          )} */}
          </div>
        </section>
      </Container>
    </>
  );
};

export default IncomeList;
