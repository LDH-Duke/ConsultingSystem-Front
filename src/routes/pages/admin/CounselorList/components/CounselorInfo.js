import React, {useState} from "react";
import { Link } from 'react-router-dom';
import example from './img/example.png';
import './CounselorInfo.css';
import {Button, Modal} from 'antd'

/**
 * List
 */

const CounselorInfo = (props) => {
    const {counselor, acceptCounselor, rejectCounselor} = props;

    return(
        <div className="admin-counselor-info">
            <img src={example} alt="상담사 이미지" />
            <div className="admin-counselor-infos">
                <span className="admin-counselor-id">
                    상담사 아이디: {counselor.id}
                </span>
                <span className="admin-counselor-nickname">
                    상담사 예명: {counselor.nickname}
                </span>
                <span className="admin-counselor-tel">
                    상담사 전화번호: {counselor.phone}
                </span>
            </div>
            <div className="admin-counselor-buttons">
                <Button onClick={() => acceptCounselor(counselor.id)}>수락하기</Button>
                <Button onClick={() => rejectCounselor(counselor.id)}>거절하기</Button>
            </div>
        </div>
    )
}

export default CounselorInfo;