import React from "react";
import './Consultinghistory.css'
import Title from "../../../components/Title";

export const ConsultinghistoryPresenter = ({
    userinfos
}) => {
    return(
        <div className="cousultinghistory-container">
            <div className="consultinghistory-wrap">
                <div className="title">
                    <Title title = "상담내역" />
                </div>
                <div className="list">
                    <span>회원 명 : {userinfos[0].name}</span>
                    <span>문의 내용 : {userinfos[0].question}</span>
                    <span>상담 일자 : {userinfos[0].time}</span>
                    <span>상담 시간 : {userinfos[0].duringtime}분</span>
                </div>
            </div>
        </div>
    )
}