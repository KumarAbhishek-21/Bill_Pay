import React, { useState } from "react";
import "./Bills.css";

const Bills = () => {
  // State for tab selection
  const [activeTab, setActiveTab] = useState("history");

  // State for history and due bills
  const [historyBills, setHistoryBills] = useState([
    {
      billNo: "EBS_24",
      billDate: "2024-12-10",
      unitsConsumed: 100,
      dueDate: "2024-12-20",
      status: "PENDING",
    },
  ]);

  const [dueBills, setDueBills] = useState([
    {
      billDate: "2024-12-10",
      unitsConsumed: 120,
      amount: 6.20*120,
      dues: 0,
      payable: 0,
      action: "PAY",
    },
  ]);

  const amountPayable = (amount, dues) => {
    return amount + dues;
  }

  const amount = (unitsConsumed) => {
    return 6.20*unitsConsumed;
  }

  return (
    <div className="bills-container">
      <h1>Bills</h1>
      <div className="tabs">
        <button
          className={`tab ${activeTab === "history" ? "active" : ""}`}
          onClick={() => setActiveTab("history")}
        >
          History
        </button>
        <button
          className={`tab ${activeTab === "due" ? "active" : ""}`}
          onClick={() => setActiveTab("due")}
        >
          Due
        </button>
      </div>

      {activeTab === "history" ? (
        <>
          <table className="bills-table">
            <thead>
              <tr>
                <th>Bill No.</th>
                <th>Bill Date</th>
                <th>UNITS Consumed</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {historyBills.map((bill, index) => (
                <tr key={index}>
                  <td>{bill.billNo}</td>
                  <td>{bill.billDate}</td>
                  <td>{bill.unitsConsumed}</td>
                  <td>{amount(bill.unitsConsumed)}</td>
                  <td>{bill.dueDate}</td>
                  <td className="pending">{bill.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </>
      ) : (
        <>
          <table className="bills-table">
            <thead>
              <tr>
                <th>Bill Date</th>
                <th>UNITS Consumed</th>
                <th>Amount</th>
                <th>DUES</th>
                <th>Payable</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {dueBills.map((bill, index) => (
                <tr key={index}>
                  <td>{bill.billDate}</td>
                  <td>{bill.unitsConsumed}</td>
                  <td>{bill.amount}</td>
                  <td>{bill.dues}</td>
                  <td>{amountPayable(bill.amount, bill.dues)}</td>
                  <td>
                    <button className="pay-btn">{bill.action}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
         
        </>
      )}
    </div>
  );
};

export default Bills;
