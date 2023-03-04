import { createContext, useState } from "react";

export const AnimationsContext = createContext({});

export const AnimationsProvider = ({children}) => {
  const [animNewBuilding, setAnimNewBuilding] = useState("");
  const [animOneBuilding, setAnimOneBuilding] = useState("");
  
  return (
    <AnimationsContext.Provider value={{ animNewBuilding, setAnimNewBuilding, animOneBuilding, setAnimOneBuilding }}>
      {children}
    </AnimationsContext.Provider>
  )
}