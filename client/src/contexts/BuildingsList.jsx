import { createContext, useState, useEffect } from "react";

export const BuildingsContext = createContext({});

export const BuildingsProvider = ({children}) => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    async function fetchBuildings() {
      const response = await fetch('https://picsum.photos/v2/list?limit=13&query=houses');
      const data = await response.json();
      const names = ['João', 'Pedro', 'Maria', 'Ana', 'Paulo', 'Fernando', 'Lucas', 'Rafael', 'Cristina', 'Isabela', 'Carla', 'Ricardo', 'Júlia'];
      const surnames = ['Silva', 'Santos', 'Oliveira', 'Souza', 'Pereira', 'Carvalho', 'Mendes', 'Almeida', 'Ribeiro', 'Gomes', 'Ferreira', 'Rodrigues', 'Costa'];
      const addresses = ['Rua São Paulo, 123', 'Avenida Rio de Janeiro, 456', 'Rua Minas Gerais, 789', 'Rua Bahia, 987', 'Rua Paraná, 654', 'Avenida Amazonas, 321', 'Rua Espírito Santo, 345', 'Avenida Paraná, 678', 'Rua Ceará, 901', 'Avenida Santa Catarina, 234', 'Rua Mato Grosso, 567', 'Avenida São Francisco, 890', 'Rua Rio Grande do Sul, 432'];
      const buildings = data.map((item, index) => {
        const name = names[index];
        const surname = surnames[Math.floor(Math.random() * surnames.length)];
        const address = addresses[index];
        return {
          id: item.id,
          name: `${name} ${surname}`,
          address: address,
          price: (Math.floor(Math.random() * 1000000) + 100000).toLocaleString('pt-BR', { minimumFractionDigits: 2 }),
          bedrooms: Math.floor(Math.random() * 5) + 1,
          bathrooms: Math.floor(Math.random() * 3) + 1,
          area: Math.floor(Math.random() * 500) + 100,
          image: item.download_url,
        };
      });
      setBuildings(buildings);
    }
    fetchBuildings();
  }, []);
  
  return (
    <BuildingsContext.Provider value={{ buildings }}>
      {children}
    </BuildingsContext.Provider>
  )
}