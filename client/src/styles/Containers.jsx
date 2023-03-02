import styled from "styled-components";

export const PageContainer = styled.div`
  width: 100%;
  height: 100dvh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
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
  border-radius: var(--radius);
  background-color: var(${props => props.bg});
  color: var(${props => props.color});
`
export const ImgContainer = styled.img`
  max-width: fit-content;
  max-height: ${props => props.maxH};
`