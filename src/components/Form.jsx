// eslint-disable react/prop-types
import { useContext } from "react";
import "./Form.css";
import { AppContext } from "../AppContextProvider";

const Form = () => {
  const { amount, setAmount, envelope, setEnvelope, submitHandler } =
    useContext(AppContext);

  return (
    <>
      <h1>Set Budget</h1>
      <div className="startingBudget">
        <div>
          <label>Budget Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Number of Envelopes</label>
          <input
            type="number"
            value={envelope}
            onChange={(e) => setEnvelope(e.target.value)}
          />
        </div>
      </div>
      <button onClick={submitHandler}>Submit</button>
    </>
  );
};

export default Form;
