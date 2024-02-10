import React from 'react'
import styled from 'styled-components'

export const InputContainer = styled.div`
    flex-direction: ${(props) => props.direction || "row"};
    width: ${(props) => props.width || '100%'};
`

export const InputLabel = styled.label`
  font-weight: bold;
  font-size: 0.9rem;
`;

export const InputField = styled.input`
  width: 100%;

  padding: 0.7rem 0; 

  border: none;
  border-bottom: 2px solid #b1b1b1;
  outline: none;
  background-color: transparent;
  
  &:hover,
  &:focus{
    border-bottom: 2px solid #00cc8f ;
    transition: 0.1s ease-in-out;
  }
`;



export const Input = ({
    label,
    type,
    placeholder,
    onChange,
    onBlur

}) => {
  return (
    <InputContainer>
        <InputLabel>{label}</InputLabel>
        <InputField 
        type={`${type ? type : 'text'}`} 
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onBlur={onBlur}
        />
    </InputContainer>
  )
}
