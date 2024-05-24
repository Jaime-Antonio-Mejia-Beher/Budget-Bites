/* eslint-disable react/prop-types */
import "./Envelope.css";

const Envelope = ({ value }) => {
  return (
    <div className="envelope">

        <p>{value}</p>
        <input type="text" placeholder="Amount Spent" />
        <button>Submit</button>
    </div>
  );
};

export default Envelope;
