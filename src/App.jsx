import { useState } from "react";
import "./App.css";
import Envelope from "./components/Envelope";
import Header from "./components/Header";

function App() {
  const [amount, setAmount] = useState(0);
  const [envelope, setEnvelope] = useState(0);
  const [envelopeValue, setEnvelopeValue] = useState(0);
  const [envelopes, setEnvelopes] = useState([]);

  const submitHandler = () => {
    if (amount <= 0 || envelope <= 0) {
      alert("Input a number greater than zero");
      return;
    }

    const value = Math.floor(amount / envelope);
    setEnvelopeValue(value);

    const arr = Array.from({ length: envelope }, () => value);
    setEnvelopes(arr);
  };

  return (
    <>
      <div>
        <Header
          amount={amount}
          setAmount={setAmount}
          envelope={envelope}
          setEnvelope={setEnvelope}
          submitHandler={submitHandler}
        />
      </div>
      {/* {users.map((u) => (
        <p>{u}</p>
      ))} */}

      <div className="appContainer">
        {envelopes.map((env, i) => (
          <Envelope key={i} value={envelopeValue} />
        ))}
      </div>
    </>
  );
}

export default App;
