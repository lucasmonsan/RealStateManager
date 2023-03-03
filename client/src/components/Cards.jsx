import { CompContainer, FlexContainer, ImgContainer } from "../styles/Containers"
import { Text, Title } from "../styles/Elements"
import { RiHotelBedFill, RiRulerFill } from "react-icons/ri"
import { FaBath } from "react-icons/fa"

export const Cards = ({building}) => {
  return (
    <CompContainer bg="white">
      <ImgContainer width="100%" height="128px" radius="0 0 1em 1em" src={building.image_building}/>
      <FlexContainer fw="wrap" pad="0.25em 0.75em" gap="0.25em">
        <Title size="1.25rem" weight="900" width="100%" pad="0.25em 0 0 0">{building.price}</Title>
        <Text size="0.75rem" weight="500" width="100%" minH="32px">{building.address}</Text>

        <FlexContainer width="100%" jc="space-between" pad="0.5em 0">
          <FlexContainer ai="center" jc="center" gap="0.25em" bg="--colorBG" width="25%" pad="0.25em 0.5em" radius="0.5em">
            <RiHotelBedFill size={24} color="var(--color02)"/>
            <Text size="0.75rem" weight="bold">{building.bedrooms}</Text>
          </FlexContainer>

          <FlexContainer ai="center" jc="center" gap="0.25em" bg="--colorBG" width="25%" pad="0.25em 0.5em" radius="0.5em">
            <FaBath size={18} color="var(--color01)"/>
            <Text size="0.75rem" weight="bold">{building.bathrooms}</Text>
          </FlexContainer>

          <FlexContainer ai="center" jc="center" gap="0.25em" bg="--colorBG" width="40%" pad="0.25em 0.5em" radius="0.5em">
            <RiRulerFill size={20} color="var(--color03)"/>
            <Text size="0.75rem" weight="bold">{building.area}m²</Text>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </CompContainer>
  )
}