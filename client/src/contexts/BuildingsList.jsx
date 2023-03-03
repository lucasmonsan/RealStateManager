import { createContext, useState, useEffect } from "react";

export const BuildingsContext = createContext({});

export const BuildingsProvider = ({children}) => {
  const [buildings, setBuildings] = useState([]);
  const [quantity, setQuantity] = useState(31);

  useEffect(() => {
    const fetchBuildings = async () => {
      const response = await fetch(
        `https://api.randomuser.me/?results=${quantity}&nat=BR`
      );
      const data = await response.json();

      const buildings = data.results.map((result, index) => ({
        id: index + 1,
        name: `${result.name.first} ${result.name.last}`,
        description: `Lindo edifício localizado no bairro ${result.location.city}. ${result.location.state} - ${result.location.country}. Possui ${Math.floor(Math.random() * 5) + 1} quartos, ${Math.floor(Math.random() * 4) + 1} banheiros e uma área de ${Math.floor(Math.random() * 400) + 100}m².`,
        address: `${result.location.street.name}, ${Math.floor(Math.random() * 1000)} - ${result.location.city}, ${result.location.state}`,
        bedrooms: Math.floor(Math.random() * 5) + 1,
        bathrooms: Math.floor(Math.random() * 4) + 1,
        area: Math.floor(Math.random() * 400) + 100,
        price: `R$ ${(Math.random() * 100000).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
        image_proprietary: result.picture.large,
        image_building: `https://source.unsplash.com/featured/?building,apartment,house&sig=${Math.floor(Math.random() * 1000)}`,
      }));

      setBuildings(buildings);
    };

    fetchBuildings();
  }, [quantity]);
  
  return (
    <BuildingsContext.Provider value={{ buildings }}>
      {children}
    </BuildingsContext.Provider>
  )
}