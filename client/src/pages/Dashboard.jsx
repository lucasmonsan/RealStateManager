import { PageContainer, GridContainer } from "../styles/Containers"
import { Cards } from "../components/Cards"
import { useContext } from "react"
import { BuildingsContext } from "../contexts/BuildingsList"
import { Header } from "../components/Header"
import { InputsContext } from "../contexts/InputsController"
import { NewBuilding } from "../components/NewBuilding"
import { AnimationsContext } from "../contexts/AnimationsController"
import { OneBuilding } from "../components/OneBuilding"

export const Dashboard = () => {
  const { buildings } = useContext(BuildingsContext);
  const { searchInput } = useContext(InputsContext);
  const { animNewBuilding, animOneBuilding } = useContext(AnimationsContext);

  const filteredBuildings = buildings.filter((building) =>
    building.address.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <PageContainer>
      <Header/>
      
      <GridContainer gap="1em">
        {filteredBuildings.map(building => {return <Cards key={building.id} building={building}/>})}
      </GridContainer>

      {animNewBuilding !== "" && <NewBuilding/>}
      {animOneBuilding !== "" && <OneBuilding/>}
    </PageContainer>
  )
}