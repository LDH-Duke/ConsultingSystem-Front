import React from "react";
import { Button } from "antd";
import "./Ask.css";

export const Ask = ({
    isUpdate,
    onSubmit,
    setContent,
    onUpdate,
    setAsk,
}) => {
    return(
        <div className="ask-container">
            <div className="ask-form">
                {
                    isUpdate ?
                    <h3>문의하기</h3>
                    :
                    <h3>문의 수정하기</h3>
                }
                <span>문의할 내용을 작성해주세요.</span>
                {
                    isUpdate ?
                    <textarea onChange={(e) => {setContent(e.target.value)}}/>
                    :
                    <textarea onChange={(e) => {setAsk(e.target.value)}}/>
                }
                {
                    isUpdate ?
                    <Button onClick={onSubmit}>작성 하기</Button>
                    :
                    <Button onClick={onUpdate}>수정 하기</Button>
                }
            </div>
        </div>
    )
}