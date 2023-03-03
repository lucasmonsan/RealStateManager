import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`
export const CompContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  min-height: ${props => props.height};
  border-radius: var(--radius);
  background-color: ${props => props.bg};
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const FlexContainer = styled.div`
  display: flex;
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  flex-direction: ${props => props.fd};
  flex-wrap: ${props => props.fw};
  gap: ${props => props.gap};
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.pad};
  border-radius: ${props => props.radius || "var(--radius)"};
  background-color: var(${props => props.bg});
  color: var(${props => props.color});
`
export const GridContainer = styled.div`
  display: grid;
  gap: ${props => props.gap};
  padding: 0.5em 0;

  @media (max-width:2135px) {grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;}
  @media (max-width:1435px) {grid-template-columns: 1fr 1fr 1fr 1fr 1fr;}
  @media (max-width:1080px) {grid-template-columns: 1fr 1fr 1fr 1fr;}
  @media (max-width:769px) {grid-template-columns: 1fr 1fr 1fr;}
  @media (max-width:540px) {grid-template-columns: 1fr 1fr;}
`
export const FloatContainer = styled.div`
  position: absolute;
  right: 0.5em;
  top: 0.5em;
  display: flex;
  align-items: ${props => props.ai};
  justify-content: ${props => props.jc};
  flex-direction: ${props => props.fd};
  gap: ${props => props.gap};
  border-radius: ${props => props.radius};
  background-color: var(${props => props.bg});
  padding: 0.5em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`
export const ImgContainer = styled.img`
  overflow: hidden;
  width: ${props => props.width};
  height: ${props => props.height};
  object-fit: cover;
  max-height: ${props => props.height};
  min-height: ${props => props.height};
  border-radius: ${props => props.radius};
`