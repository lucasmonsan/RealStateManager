import { CompContainer, FlexContainer, ModalContainer } from "../styles/Containers"
import { RiBuilding2Fill, RiSendPlane2Fill, RiCloseFill } from "react-icons/ri"
import { Input, Textarea, Title } from "../styles/Elements"
import { useContext, useEffect, useState } from "react"
import { BuildingsContext } from "../contexts/BuildingsList"
import { AnimationsContext } from "../contexts/AnimationsController"

export const NewBuilding = () => {
  const { buildings, setBuildings } = useContext(BuildingsContext);
  const { animNewBuilding, setAnimNewBuilding } = useContext(AnimationsContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState("");
  const [aparts, setAparts] = useState("");

  const addBuilding = () => {
    if (!name || !description || !address || !bedrooms || !bathrooms || !area || !price || !aparts) {
      alert("TODOS os campos são obrigatórios!")
    } else {
      const newBuilding = {
        id: buildings.length + 1,
        name, description, address, bedrooms, bathrooms, area, aparts,
        price: `R$ ${Number(price).toLocaleString("pt-BR", {minimumFractionDigits: 2, maximumFractionDigits: 2,})}`,
      };    
      setBuildings(prevBuildings => [...prevBuildings, newBuilding]);
      setName("");setDescription("");setAddress("");setBedrooms("");setBathrooms("");setArea("");setPrice("");setAparts("");
    }
  }

  useEffect(() => {
    if (animNewBuilding === "show") {
      setTimeout(() => {document.getElementById("AuxNB").style.opacity = "1"},10);
    } else {
      document.getElementById("AuxNB").style.opacity = "0";
      setTimeout(() => setAnimNewBuilding(""),300);
    }
  },[animNewBuilding])
  return (
    <ModalContainer id="AuxNB">
      <CompContainer width="100%" maxW="40em" pad="1.5em" bg="white">
        <FlexContainer width="100%" ai="center" gap="0.25em" color="--color01" pad="0 0.25em 0.25em 0.5em">
          <RiBuilding2Fill size={24}/>
          <Title width="100%" size="1.5rem" color="--color01">Novo edifício</Title>
          <RiCloseFill size={32} onClick={e => setAnimNewBuilding("close")}/>
        </FlexContainer>

        <FlexContainer fw="wrap" jc="space-between" gap="0.5em" width="100%" pad="0.5em 0">
          <FlexContainer width="100%" height="2.5em" pad="0.25em 1em" ai="center" gap="0.25em" bg="--colorBG" color="--colorPlaceholder">
            <Input type="text" width="100%" size="0.9rem" placeholder="Nome do edifício"
              value={name} onChange={e => setName(e.target.value)}/>
          </FlexContainer>
          <FlexContainer width="100%" height="5em" pad="0.5em 1em" ai="center" bg="--colorBG" color="--colorPlaceholder">
            <Textarea width="100%" size="0.9rem" placeholder="Descrição"
              value={description} onChange={e => setDescription(e.target.value)}/>
          </FlexContainer>
          <FlexContainer width="100%" height="2.5em" pad="0.25em 1em" ai="center" bg="--colorBG" color="--colorPlaceholder">
            <Input type="text" width="100%" size="0.9rem" placeholder="Endereço completo"
              value={address} onChange={e => setAddress(e.target.value)}/>
          </FlexContainer>
          <FlexContainer width="14%" height="2.5em" pad="0.25em 0.5em" ai="center" bg="--colorBG" color="--colorPlaceholder">
            <Input className="noArrow" type="number" align="center" width="100%" size="0.9rem" placeholder="Quartos"
              value={bedrooms} onChange={e => setBedrooms(e.target.value)}/>
          </FlexContainer>
          <FlexContainer width="16%" height="2.5em" pad="0.25em 0.5em" ai="center" bg="--colorBG" color="--colorPlaceholder">
            <Input className="noArrow" type="number" align="center" width="100%" size="0.9rem" placeholder="Banheiros"
              value={bathrooms} onChange={e => setBathrooms(e.target.value)}/>
          </FlexContainer>
          <FlexContainer width="14%" height="2.5em" pad="0.25em 0.5em" ai="center" bg="--colorBG" color="--colorPlaceholder">
            <Input className="noArrow" type="number" align="center" width="100%" size="0.9rem" placeholder="Área m²"
              value={area} onChange={e => setArea(e.target.value)}/>
          </FlexContainer>
          <FlexContainer width="12%" height="2.5em" pad="0.25em 0.5em" ai="center" bg="--colorBG" color="--colorPlaceholder">
            <Input className="noArrow" type="number" align="center" width="100%" size="0.9rem" placeholder="Apto's"
              value={aparts} onChange={e => setAparts(e.target.value)}/>
          </FlexContainer>
          <FlexContainer width="30%" height="2.5em" pad="0.25em 0.5em" ai="center" bg="--colorBG" color="--colorPlaceholder">
            <Input className="noArrow" type="number" align="center" width="100%" size="0.9rem" placeholder="Aluguel R$"
              value={price} onChange={e => setPrice(e.target.value)}/>
          </FlexContainer>
          <FlexContainer className="pointer click" width="2.5em" height="2.5em" pad="0.5em" ai="center" jc="center" gap="0.25em" bg="--color01" color="--colorPlaceholder" onClick={addBuilding}>
            <RiSendPlane2Fill size={20} color="#FFF"/>
          </FlexContainer>
        </FlexContainer>
      </CompContainer>
    </ModalContainer>
  )
}