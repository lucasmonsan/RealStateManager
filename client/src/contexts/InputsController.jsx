import { createContext, useState } from "react";

export const InputsContext = createContext({});

export const InputsProvider = ({children}) => {
  const [searchInput, setSearchInput] = useState("");
  
  return (
    <InputsContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </InputsContext.Provider>
  )
}