import { CompContainer, FlexContainer, ImgContainer } from "../styles/Containers"
import { Input, Title } from "../styles/Elements"
import { RiSearch2Line, RiFilter2Line } from "react-icons/ri"

export const Header = () => {
  return (
    <CompContainer height="4em">
      <FlexContainer ai="center" jc="space-between" gap="1em" width="100%">
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
    </CompContainer>
  )
}