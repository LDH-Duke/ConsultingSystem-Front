import React from "react";
import styled from "styled-components";
import { Input, Form } from "antd";
import './InputComponent.css'

const Formname = styled.div`
    color: var(--title-color);
    font-weight: bold;
    font-size: large;
`;

export const InputComponent = ({
    name,

    type,
    placeholder,
    onChange,
    onBlur,

    notice,
    
    isShowWarning,
    warnings,

    isReadonly,
    value
}) => {
    return (
        <Form.Item style={{width: '100%'}}>
            <Formname>{name}</Formname>
            <Input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                readOnly={isReadonly}
                value={value}
            />
            {
                notice &&
                <div>{notice}</div>
            }
            <div className="input-warning">
                {
                    isShowWarning && 
                    warnings.map((warning) => {
                        <span className="warning-text">{warning}</span>
                    })
                }   
            </div>  
        </Form.Item>
    )
}