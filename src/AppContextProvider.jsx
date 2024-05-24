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

  const evaluate = (i, amountSpent) => {
    let arr = [...envArray];
    /*for (let i = 0; i < arr.length; i++) {
      let card = arr[i];
      spent = card - amountSpent
      
    }*/

    arr[i] = arr[i] - amountSpent; // 20 - 25
    // console.log(arr[i]) // -5
    let amount = arr[i]; // -5 = -5
    if (amount < 0) { // if -5 < 0
      arr[i] = 0;  // set to zero
      // console.log(amount) // logs -5
      let newAmount = amount - arr[1]
      console.log(newAmount) // logs 0
      // loop through and subtract from second
      // card upward
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
        evaluate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };
