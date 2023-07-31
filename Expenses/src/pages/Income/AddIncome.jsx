import React, { useEffect, useState } from "react";
import moneySVG from "../../img/money.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addIncome } from "../../redux/slice/incomeSlice";
import { toast } from "react-toastify";

const AddIncome = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const handleAddIncome = (e) => {
    e.preventDefault();
    if (name && description && amount) {
      dispatch(
        addIncome({
          name,
          description,
          amount,
          user: user?.result?._id,
          navigate,
          toast,
        })
      );
    }
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return (
    <>
      <section className="py-5 bg-success vh-100">
        <div className="container text-center">
          <a className="d-inline-block mb-5">
            <img
              className="img-fluid"
              src={moneySVG}
              alt="SVGeXPENSES"
              width="200"
            />
          </a>
          <div className="row mb-4">
            <div className="col-12 col-md-8 col-lg-5 mx-auto">
              <div className="p-4 shadow-sm rounded bg-white">
                <form onSubmit={handleAddIncome}>
                  <span className="text-muted">Income</span>
                  <h2 className="mb-4 fw-light">Record New Income</h2>

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

                  <button type="submit" className="btn btn-success mb-4 w-100">
                    Record Income
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddIncome;
