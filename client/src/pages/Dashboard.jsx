import { FlexContainer, PageContainer, ImgContainer, GridContainer } from "../styles/Containers"
import { Input, Title } from "../styles/Elements"
import { RiSearch2Line, RiFilter2Line } from "react-icons/ri"
import { Cards } from "../components/Cards"
import { useContext } from "react"
import { BuildingsContext } from "../contexts/BuildingsList"

export const Dashboard = () => {
  const { buildings } = useContext(BuildingsContext);

  return (
    <PageContainer>
      <FlexContainer ai="center" jc="space-between" gap="1em">
        <FlexContainer ai="center">
          <ImgContainer height="4em" src="https://raichu-uploads.s3.amazonaws.com/logo_null_KuA1c6.png"/>
          <Title size="2.5rem">Monsan</Title>
        </FlexContainer>
        <FlexContainer width="70%" height="3em" pad="0 0.5em" ai="center" gap="0.25em" bg="--colorBG" color="--colorPlaceholder">
          <RiSearch2Line size={28}/>
          <Input width="100%" size="1.25rem" placeholder="Digite o endereço, cidade ou CEP"/>
          <RiFilter2Line size={28}/>
        </FlexContainer>
        <ImgContainer height="4em" src="https://raichu-uploads.s3.amazonaws.com/logo_null_KuA1c6.png"/>
      </FlexContainer>
      
      <GridContainer gap="1em">
        {buildings.map(building => {return <Cards key={building.id} building={building}/>})}
      </GridContainer>
    </PageContainer>
  )
}