import React from 'react'
import styled from 'styled-components'


const ButtonContainer = styled.button`
    width: 100%;
    padding: 0.5rem;

    border-radius: 5px;
    border: 2px solid #00cc8f;

    background-color: ${(props) => props.type === 'basic' ? '#ffffff' : '#00cc8f'};
    color: ${(props) => props.type === 'basic' ? 'black' : 'white'};

    transition: all 0.1s ease-in-out;
    &:active{
        background-color: ${(props) => props.type === 'basic' ? '#ebebeb' : '#00bd84'};
        
    }
`
const ButtonTitle = styled.span`
    font-size: 0.9rem;
    font-weight: bold;
`


export const Button = ({
    onClick,
    type,
    title,
}) => {
    const handleClick = typeof (onClick) === 'function' ? onClick : () => {
        window.location.href = onClick;
    };


    return (
        <ButtonContainer onClick={handleClick} type={type}>
            <ButtonTitle>
                {title}
            </ButtonTitle>
        </ButtonContainer>
    )
}
