import styled from "styled-components";

export const Title = styled.strong`
  width: ${props => props.width};
  padding: ${props => props.pad};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: var(${props => props.color || "--colorText"});
`
export const Text = styled.span`
  width: ${props => props.width};
  min-height: ${props => props.minH};
  font-size: ${props => props.size};
  font-weight: ${props => props.weight};
  color: var(--colorPlaceholder);
`
export const Input = styled.input`
  text-align: ${props => props.align};
  font-size: ${props => props.size};
  width: ${props => props.width};
  height: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  
`
export const Textarea = styled.textarea`
  text-align: ${props => props.align};
  font-size: ${props => props.size};
  width: 100%;
  height: 100%;
  padding: ${props => props.pad};
  background-color: transparent;
  border: none;
  outline: none;
  resize: none;
`
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.pad};
`