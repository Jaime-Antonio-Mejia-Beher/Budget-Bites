import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import Envelope from "./Envelope";

const EnvelopesContainer = () => {
  const { envArray, overage } = useContext(AppContext);

  return (
    <div className="appContainer">
      {overage < 0 && <Envelope className={"redEnv"} value={overage} />}
      {envArray.map((env, i) => (
        <Envelope key={i} index={i} value={env} />
      ))}
    </div>
  );
};

export default EnvelopesContainer;
