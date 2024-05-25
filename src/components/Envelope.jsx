/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./Envelope.css";
import { AppContext } from "../AppContextProvider";

const Envelope = ({ index, value, className }) => {
  const [spent, setSpent] = useState(0);  // stores amount spent from input
  const { evaluate } = useContext(AppContext);
  // index = index position in envArray
  // value = amount/envelopes

  return (
    <div className={`envelope ${className}`}>
      <div className="env-tracker">
        {index >= 0 && <span>#{index + 1}</span>}
        {value >= 0 ? <p>${value}</p> : <p>-${Math.abs(value)}</p>}
      </div>
      {index <= 0 && ( // if index <= 0 then render code below
        <>
          <div>
            <label>Amount Spent</label>
            <input
              value={spent}
              onChange={(e) => setSpent(e.target.value)}
              type="number"
              placeholder="Amount Spent"
              />
          </div>
          <button onClick={() => evaluate(index, spent)}>Submit</button>
        </>
      )}
    </div>
  );
};

export default Envelope;
