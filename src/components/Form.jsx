// eslint-disable react/prop-types
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

const Form = () => {
  const { amount, setAmount, envelope, setEnvelope, submitHandler } =
    useContext(AppContext);

  return (
    <>
      <div className="startingBudget">
        <div>
          <h1>Set Budget</h1>
          <br />
          <label>Budget Amount</label>
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <br />
          {/* </div>
        <div> */}
          <label>Number of Envelopes</label>
          <br />
          <input
            type="number"
            value={envelope}
            onChange={(e) => setEnvelope(e.target.value)}
          />
          {/* </div>
        <div> */}
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Form;
