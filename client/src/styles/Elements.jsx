import styled from "styled-components";

export const Title = styled.strong`
  width: ${props => props.width};
  padding: ${props => props.pad};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: var(--colorText);
`
export const Text = styled.span`
  width: ${props => props.width};
  min-height: ${props => props.minH};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: var(--colorPlaceholder);
`
export const Input = styled.input`
  text-align: center;
  font-size: ${props => props.size};
  width: ${props => props.width};
  background-color: transparent;
  border: none;
  outline: none;
`