import axios from "axios";
import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import { HiSwitchHorizontal } from "react-icons/hi";
import "react-dropdown/style.css";
// import './ExchangeRates.css'

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);
  const [options, setOptions] = useState([]); // Options stores currencies

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const res = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );

        if (res.status !== 200) {
          throw new Error("Network res was not ok");
        }

        const rates = res.data.rates;
        let keys = Object.keys(rates);

        setFrom(keys[0]);
        setTo(keys[1]);
        setOptions(keys);
        setRates(rates);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  useEffect(() => {
    convert();
  }, [to, from, input]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  // Function to convert the currency
  function convert() {
    let x = input / rates[from];
    let result = x * rates[to];

    setOutput(result);
  }


  return (
    <div className="ex-rate-container">
      <h2>Exchange Rates</h2>
      <div className="left">
        <input
          type="text"
          placeholder="Enter amount"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div>
        <h3>From</h3>
        <Dropdown
          options={options}
          onChange={(e) => {
            setFrom(e.value);
          }}
          value={from}
          placeholder="From"
        />
      </div>
      <div>
        <h3>To</h3>
        <Dropdown
          options={options}
          onChange={(e) => {
            setTo(e.value);
          }}
          value={to}
          placeholder="To"
        />
      </div>
      <div>
        <h2>Converted Amount:</h2>
        <p>{input + " " + from + " = " + output.toFixed(2) + " " + to}</p>
        <p>
          Rates by{" "}
          <a href="https://www.exchangerate-api.com">
            Rates By Exchange Rate API
          </a>
        </p>
      </div>
    </div>
  );
};

export default ExchangeRates;
