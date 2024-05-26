// eslint-disable react/prop-types
import { useContext } from "react";
import { AppContext } from "../AppContextProvider";

const Form = () => {
  const { amount, setAmount, envelope, setEnvelope, submitHandler } =
    useContext(AppContext);

  return (
    <>
      <div className="startingBudget">
        <img
          // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.1Z9prgZ6F1yT0uzY5-qU8wHaD4%26pid%3DApi&f=1&ipt=53f4f3d7faeb9cc03f8fdd5f30892cc6bc12094983a4ddcff8adaaf6b576c7b7&ipo=images"
          // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.-dY1qbtW5z8Ca0mA14v5bQHaFj%26pid%3DApi&f=1&ipt=8bb2af425ea654e73e8af0c3378a23ccafa3b8a9538ed9c52b79432dc8443b8d&ipo=images"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP._95IB9N-OEI1-2Lec04P0wHaFS%26pid%3DApi&f=1&ipt=d2dd0d37f0d7029af67d352a70e57e23c4777caab4073cca9b81fe2177fa3892&ipo=images"
          alt=""
          className="full-width-image"
        />
        <div>
          <h1>Set Budget</h1>
          <br />
          <label>Budget Amount</label>
          <br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <br />
          {/* </div>
        <div> */}
          <label>Number of Envelopes</label>
          <br />
          <input
            type="number"
            value={envelope}
            onChange={(e) => setEnvelope(e.target.value)}
          />
          {/* </div>
        <div> */}
          <button onClick={submitHandler}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Form;
