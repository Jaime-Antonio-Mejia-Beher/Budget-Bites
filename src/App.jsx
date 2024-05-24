
import Form from "./components/Form";
import ExchangeRates from "./components/ExchangeRates";
import AppContextProvider from "./AppContextProvider";
import EnvelopesContainer from "./components/EnvelopesContainer";

function App() {
  return (
    <AppContextProvider>
      <Form />
      <ExchangeRates />
      <EnvelopesContainer />
    </AppContextProvider>
  );
}

export default App;
