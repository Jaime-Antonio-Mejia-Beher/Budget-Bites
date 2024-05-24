import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import Envelope from "./Envelope";

const EnvelopesContainer = () => {
  const { envArray } = useContext(AppContext);

  return (
    <div className="appContainer">
      {envArray.map((env, i) => (
        <Envelope key={i} value={env} />
      ))}
    </div>
  );
};

export default EnvelopesContainer;
