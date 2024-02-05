import React from "react";
import "./CounselorInfo.css";

const CounselorInfo = () => {
    return (
        <div className="counselor-info-container">
            <div className="counselor-img-box">

            </div>
            <div className="counselor-info-box">
                <div className="counselor-info-con">
                    <p className="counselor-name">
                        장승훈
                        <span className="counselor-number">
                            12
                        </span>
                    </p>
                    <span className="info-con">2024.02.05</span>
                </div>
                <div className="counselor-info-con">
                    ★★★★★
                    <span>회원명</span>
                </div>
                <div className="counselor-info-con">
                    <div className="consulting-time">
                        <p>(통화 10~30분)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounselorInfo;