import React from "react";
import { Button } from "antd";
import "./Ask.css";

export const Ask = ({
    onSubmit,
    setContent
}) => {
    return(
        <div className="ask-container">
            <div className="ask-form">
                <h3>문의하기</h3>
                <span>문의할 내용을 작성해주세요.</span>
                <textarea onChange={(e) => {setContent(e.target.value)}}/>
                <Button onClick={onSubmit}>제출 하기</Button>
            </div>
        </div>
    )
}