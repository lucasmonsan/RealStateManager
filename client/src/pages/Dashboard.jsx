import { PageContainer, ImgContainer, GridContainer } from "../styles/Containers"
import { Cards } from "../components/Cards"
import { useContext } from "react"
import { BuildingsContext } from "../contexts/BuildingsList"
import { Header } from "../components/Header"

export const Dashboard = () => {
  const { buildings } = useContext(BuildingsContext);

  return (
    <PageContainer>
      <Header/>
      
      <GridContainer gap="1em">
        {buildings.map(building => {return <Cards key={building.id} building={building}/>})}
      </GridContainer>
    </PageContainer>
  )
}