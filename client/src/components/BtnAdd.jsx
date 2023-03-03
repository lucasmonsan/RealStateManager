import { RiAddLine } from "react-icons/ri"
import { FlexContainer } from "../styles/Containers"

export const BtnAdd = () => {
  return (
    <FlexContainer height="3em" pad="0 0.75em" ai="center" jc="center" bg="--color01" color="--colorPlaceholder">
      <RiAddLine size={28} color="white"/>
    </FlexContainer>
  )
}