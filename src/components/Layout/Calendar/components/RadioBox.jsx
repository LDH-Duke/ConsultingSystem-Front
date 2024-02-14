import React from 'react'
import styled from 'styled-components'

const RadioBoxContainer = styled.div`
    display: flex;
`

const RadioBoxWrap = styled.div`
    display: block;
`

const RadioInupt = styled.input`
    display: none;

    &:checked+label{
        background-color: #00cc8f;
        color: white;
    }
`

const RadioLabel = styled.label`
  display: inline-block;
  padding: 0.5rem 1rem;
  /* cursor: pointer; */
  border-radius: 5px;
  background-color: #ebebeb;
`

export const RadioBox = ({ datas }) => {
    return (
        <RadioBoxContainer>
            {
                datas.map((data, idx) => {
                    return (
                        <RadioBoxWrap key={data.name}>
                            <RadioInupt
                                type='radio'
                                name={data.id}
                                id={`radio-${data.name}`}
                                value={data.value}
                                onChange={e => data.onChange(e.target.value)}
                            />
                            <RadioLabel htmlFor={`radio-${data.name}`}>
                                {data.value}
                            </RadioLabel>
                        </RadioBoxWrap>
                    )
                })
            }
        </RadioBoxContainer >
    )
}
