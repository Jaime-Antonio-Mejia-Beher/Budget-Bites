/* eslint-disable react/prop-types */
// import { useState } from "react";
import "./Header.css";

const Header = ({
  amount,
  setAmount,
  envelope,
  setEnvelope,
  submitHandler,
}) => {
  return (
    <>
      <h1>Set Budget</h1>
      <div className="startingBudget">
        <label>Budget Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="number"
          value={envelope}
          onChange={(e) => setEnvelope(e.target.value)}
        />
        <br />
        <label>Number of Envelopes</label>
      </div>
      <button onClick={submitHandler}>Submit</button>
    </>
  );
};

export default Header;
