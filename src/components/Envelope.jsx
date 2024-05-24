/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import "./Envelope.css";
import { AppContext } from "../AppContextProvider";

const Envelope = ({ index, value }) => {
  const [spent, setSpent] = useState(0);
  const { evaluate } = useContext(AppContext);

  return (
    <div className="envelope">
      <div className="env-tracker">
        <span>#{index+1}</span>
        <p>${value}</p>
      </div>
      {index <= 0 && (
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
