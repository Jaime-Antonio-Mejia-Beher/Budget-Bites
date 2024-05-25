/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0); // amount is budgeting amount
  const [envelope, setEnvelope] = useState(0); // num of envelopes desired from user
  const [envArray, setEnvArray] = useState([]); // stores array generated from amount, envelope, envelopeValue
  const [overage, setOverage] = useState(0);

  const submitHandler = () => {
    setOverage(0);
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

    let value = arr[i] - amountSpent; // 27 - 70
    if (value < 0) {
      arr[i] = 0;

      for (let j = 1; j < arr.length; j++) {
        value = arr[j] + value;
        if (value < 0) {
          arr[j] = 0;
        } else {
          arr[j] = value;
          value = 0;
        }
      }
    } else {
      arr[i] = value;
    }

    setOverage(value);

    // remove cards with 0 values
    let newArr = arr.filter((el) => el > 0);

    setEnvArray(newArr);
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
        overage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };
