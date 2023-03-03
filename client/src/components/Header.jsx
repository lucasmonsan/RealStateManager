import { CompContainer, FlexContainer, ImgContainer } from "../styles/Containers"
import { Input, Title } from "../styles/Elements"
import { RiSearch2Line, RiFilter2Line } from "react-icons/ri"
import { useContext, useState } from "react"
import { InputsContext } from "../contexts/InputsController"
import { BtnAdd } from "./BtnAdd"

export const Header = () => {
  const {searchInput, setSearchInput} = useContext(InputsContext);

  return (
    <CompContainer height="4em">
      <FlexContainer ai="center" jc="space-between" gap="1em" width="100%">
        <FlexContainer ai="center">
          <ImgContainer height="4em" src="https://raichu-uploads.s3.amazonaws.com/logo_null_KuA1c6.png"/>
          <Title size="2.5rem">Monsan</Title>
        </FlexContainer>
        <FlexContainer width="72%" height="3em" pad="0 0.5em" ai="center" gap="0.25em" bg="--colorBG" color="--colorPlaceholder">
          <RiSearch2Line size={28}/>
          <Input type="text" width="100%" size="1.25rem" placeholder="Digite o endereço, cidade ou CEP"
            value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
          <RiFilter2Line size={28}/>
        </FlexContainer>
        <FlexContainer ai="center" gap="0.25em">
          <BtnAdd/>
          <ImgContainer height="4em" src="https://raichu-uploads.s3.amazonaws.com/logo_null_KuA1c6.png"/>
        </FlexContainer>
      </FlexContainer>
    </CompContainer>    
  )
}