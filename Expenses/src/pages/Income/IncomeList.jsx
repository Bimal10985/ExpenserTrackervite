import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allIncome } from "../../redux/slice/incomeSlice";

const IncomeList = () => {
  const dispatch = useDispatch();
  const { incomes } = useSelector((state) => state.income);
  useEffect(() => {
    dispatch(allIncome());
  }, []);
  return (
    <>
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
                            <td>{elm?.name}</td>

                            <td>{elm?.name}</td>
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
