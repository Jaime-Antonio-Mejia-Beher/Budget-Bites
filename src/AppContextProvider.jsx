/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0); // amount is budgeting amount
  const [envelope, setEnvelope] = useState(0); // num of envelopes desired from user
  const [envArray, setEnvArray] = useState([]); // stores array generated from amount, envelope, envelopeValue

  const submitHandler = () => {
    if (amount <= 0 || envelope <= 0) {
      alert("Input a number greater than zero");
      return;
    }

    const value = Math.floor(amount / envelope);
    // Learned something new. Created an array from the num of envelopes from user input; num stored in envelope.
    let arr = Array.from({ length: envelope }, () => value);

    let sum = arr.reduce((total, el) => total + el);
    if (amount > sum) {
      let leftOvers = amount - sum;
      arr[0] = arr[0] + leftOvers;
    }
    setEnvArray(arr);
  };

  return (
    <AppContext.Provider
      value={{
        amount,
        envelope,
        envArray,
        setEnvelope,
        setAmount,
        submitHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };
