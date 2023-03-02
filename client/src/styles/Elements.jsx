import styled from "styled-components";

export const Title = styled.strong`
  font-size: ${props => props.size};
  color: var(--colorText);
`
export const Input = styled.input`
  text-align: center;
  font-size: ${props => props.size};
  width: ${props => props.width};
  background-color: transparent;
  border: none;
  outline: none;
`