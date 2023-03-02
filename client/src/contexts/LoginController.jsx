import { createContext, useState } from "react";

export const LoginContext = createContext({});

export const LoginProvider = ({children}) => {
  const [signed, setSigned] = useState(true);
  
  return (
    <LoginContext.Provider value={{ signed, setSigned }}>
      {children}
    </LoginContext.Provider>
  )
}