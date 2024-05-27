import { useContext } from "react";
import { AppContext } from "../AppContextProvider";
import Envelope from "./Envelope";

const EnvelopesContainer = () => {
  const { envArray, overage } = useContext(AppContext);
// envArray renders value from amount/envelope
// overage represents overspending from initial budget amount entered

  return (
    <div className="appContainer">
      {overage < 0 && <Envelope className={"redEnv"} envObj={overage} />}
      {/* if value is > 0 return this envelope */}
      {envArray.map((envObj, i) => (
        <Envelope key={i} index={i} envObj={envObj} />
      ))}
    </div>
  );
};

export default EnvelopesContainer;
