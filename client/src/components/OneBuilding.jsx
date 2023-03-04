import { useContext, useEffect } from "react";
import { AnimationsContext } from "../contexts/AnimationsController";
import { ModalContainer, CompContainer, FlexContainer } from "../styles/Containers"
import { Title } from "../styles/Elements"
import { RiBuilding2Fill, RiCloseFill } from "react-icons/ri"
import { BuildingsContext } from "../contexts/BuildingsList";

export const OneBuilding = () => {
  const { animOneBuilding, setAnimOneBuilding } = useContext(AnimationsContext);
  const oneBuilding = JSON.parse(localStorage.getItem("building"));

  useEffect(() => {
    if (animOneBuilding === "show") {
      setTimeout(() => {document.getElementById("AuxOB").style.opacity = "1"},10);
    } else {
      document.getElementById("AuxOB").style.opacity = "0";
      setTimeout(() => setAnimOneBuilding(""),300);
    }
  },[animOneBuilding])

  return (
    <ModalContainer id="AuxOB">
      <CompContainer width="100%" maxW="40em" pad="1.5em" bg="white">
        <FlexContainer width="100%" ai="center" gap="0.25em" color="--color01" pad="0 0.25em 0.25em 0.5em">
          <RiBuilding2Fill size={24}/>
          <Title width="100%" size="1.5rem" color="--color01">{oneBuilding.name}</Title>
          <RiCloseFill size={32} onClick={e => setAnimOneBuilding("close")}/>
        </FlexContainer>

        
      </CompContainer>
    </ModalContainer>
  )
}