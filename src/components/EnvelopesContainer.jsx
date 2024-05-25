import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import Envelope from "./Envelope";

const EnvelopesContainer = () => {
  const { envArray, overage } = useContext(AppContext);
// envArray renders value from amount/envelope
// overage represents overspending from initial budget amount entered

  return (
    <div className="appContainer">
      {overage < 0 && <Envelope className={"redEnv"} value={overage} />}
      {envArray.map((value, i) => ( 
        <Envelope key={i} index={i} value={value} />
      ))}
    </div>
  );
};
export default EnvelopesContainer;
