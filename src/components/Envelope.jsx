import "./Envelope.css";

const Envelope = ({value}) => {
  
  return (
    <div className="container">
      <div id="divDone">
        <label name="spent" htmlFor="spent" id="labelSpent">
          Used
        </label>
        <input name="spent" type="checkbox" id="checkbox" />
      </div>

      <div id="amount">
        <span>{value}</span>
      </div>
      <div className="moreOrLess">
        <button>-</button>
        <button>+</button>
      </div>
      {/* <input type="number" placeholder='Enter $...'/>
            <button id="myButton">Click me</button> */}
    </div>
  );
};

export default Envelope;
