import { useContext } from "react"
import { RiAddLine } from "react-icons/ri"
import { FlexContainer } from "../styles/Containers"
import { AnimationsContext } from "../contexts/AnimationsController"

export const BtnAdd = () => {
  const { setAnimNewBuilding } = useContext(AnimationsContext);

  return (
    <FlexContainer height="3em" pad="0 0.75em" ai="center" jc="center" bg="--color01" color="--colorPlaceholder" onClick={e => setAnimNewBuilding("show")}>
      <RiAddLine size={28} color="white"/>
    </FlexContainer>
  )
}