import Form from "./components/Form";
import ExchangeRates from "./components/ExchangeRates";
import AppContextProvider from "./AppContextProvider";
import EnvelopesContainer from "./components/EnvelopesContainer";

function App() {
  return (
    <AppContextProvider>
      <div>
        <div className="flex-container">
          <Form />
          <EnvelopesContainer />
        </div>
      </div>
      <div>
        <ExchangeRates />
      </div>
    </AppContextProvider>
  );
}

export default App;
