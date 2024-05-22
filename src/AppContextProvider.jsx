
import React from 'react'
import { createContext } from "react";


const AppContext = createContext()

const AppContextProvider = ({children}) => {
  return <AppContext.Provider value={}>
    {children}
    </AppContext.Provider>;
}

export default AppContextProvider
export { AppContext }