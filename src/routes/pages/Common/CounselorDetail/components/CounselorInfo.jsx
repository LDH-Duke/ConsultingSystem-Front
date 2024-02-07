import React from "react";
import { Link } from "react-router-dom";
import example from './example.png';
import './CounselorInfo.css';

export const CounselorInfo = ({
    counselor,
}) => {
    return (
        <div className="counselor-info-container">
            <div className="counselor-image">
                <img src={example} alt="상담사 이미지" />
            </div>

            <div className="counselor-info-box">                
                <div className="counselor-info">
                    <span className="counselor-category">분류</span>
                    <span className="counselor-nickname">예명</span>
                    <span className="counselor-rating">등급</span>
                </div>

                <div className="counselor-links">
                    <Link>선물하기</Link>
                    <Link>문의하기</Link>
                    <Link>상담하기</Link>
                </div>
            </div>
        </div>
    )
}