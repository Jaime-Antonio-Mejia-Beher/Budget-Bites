import { useState } from "react";
import "./App.css";
import Envelope from "./components/Envelope";
import Form from "./components/Form";

function App() {
  const [amount, setAmount] = useState(0); // amount is budgeting amount
  const [envelope, setEnvelope] = useState(0); // num of envelopes desired from user
  const [envelopeValue, setEnvelopeValue] = useState(0); // stores amount for each envelope
  const [envArray, setEnvArray] = useState([]); // stores array generated from amount, envelope, envelopeValue
  // console.log(envelopes)

  const submitHandler = () => {
    if (amount <= 0 || envelope <= 0) {
      alert("Input a number greater than zero");
      return;
    }

    const value = Math.floor(amount / envelope);
    setEnvelopeValue(value);
    // Learned something new. Created an array from the num of envelopes from user input; num stored in envelope.
    const arr = Array.from({ length: envelope }, () => value);
   setEnvArray(arr);
  };

  return (
    <>
      <div>
        <Form
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
{/* Displays array with length from 'envelope' and assigns each env with 'envelopeValue' */}
      <div className="appContainer">
        {envArray.map((env, i) => (
          <Envelope key={i} value={envelopeValue} />
        ))}
      </div>
    </>
  );
}

export default App;
