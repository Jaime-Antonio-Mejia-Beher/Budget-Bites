/* eslint-disable react/prop-types */
import React from "react";
import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [amount, setAmount] = useState(0); // amount is budgeting amount
  const [envelope, setEnvelope] = useState(0); // num of envelopes
  const [envArray, setEnvArray] = useState([]); // array of envelope
  const [overage, setOverage] = useState(0);

  const submitHandler = () => {
    setOverage(0);
    if (amount <= 0 || envelope <= 0) {
      alert("Input a number greater than zero");
      return;
    }

    const value = Math.floor(amount / envelope);
    // Learned something new. Created an array from the num of envelopes from user input; sets each element of the array to 'value'.
    let arr = Array.from({ length: envelope }, () => value); 

    let sum = arr.reduce((total, el) => total + el);
    if (amount > sum) {
      let leftOvers = amount - sum;
      arr[0] = arr[0] + leftOvers;
    }
    setEnvArray(arr);
  };

// We need to update the # of envelopes and their respective dollar value as we evaluate current amount spent
  const evaluate = (i, amountSpent) => {
    let arr = [...envArray]; // use spread operator to store envArray into arr

    // value stores current envelope value minus the amount spent 
    let value = arr[i] - amountSpent; // (ie 25 - 70) equate to negative value
    if (value < 0) {
      // if the value is negative, reset to zero
      arr[i] = 0;

      // 
      for (let i = 1; i < arr.length; i++) {
        value = arr[i] + value;
        console.log('first', value)
        if (value < 0) {
          arr[i] = 0;
        } else {
          arr[i] = value;
          console.log('Second', value);
          value = 0;
        }
      }
    } else {
      arr[i] = value;
    }

    setOverage(value);

    // remove cards with 0 values... change css instead
    // let newArr = arr.filter((val) => val > 0);

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
        overage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
export { AppContext };
