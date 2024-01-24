import React from "react";
import './AskAdmin.css';
import Title from "../../../components/Title";
import { Button } from "antd";

export const AskAdminPresenter = () => {
    return (
        <div className="askadmin-container">
            <div className="askadmin-wrap">
                <div className="title">
                    <Title title={'문의하기'}/>
                </div>
                <div className="askadmin-form">
                    <input placeholder="제목입력해주세요" />
                    <h3>문의 내용</h3>
                    <textarea cols={100} rows={20} />
                    <Button>제출 하기</Button>
                </div>
            </div>
        </div>
    )
}