import React from "react";
import './AskAdmin.css';
import Title from "../../../components/Title";
import { Button } from "antd";

export const AskAdminPresenter = ({
    setContent,
    onSubmit
}) => {
    return (
        <div className="askadmin-container">
            <div className="askadmin-wrap">
                <div className="title">
                    <Title title={'문의하기'}/>
                </div>
                <div className="askadmin-form">
                    <h3>문의 내용</h3>
                    <textarea cols={100} rows={20} 
                    onChange={(e) => {setContent(e.target.value)}} />
                    <Button onClick={onSubmit}>제출 하기</Button>
                </div>
            </div>
        </div>
    )
}