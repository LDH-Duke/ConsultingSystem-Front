import React from "react";
import "./ReviewInfo.css";

const ReviewInfo = () => {
    return (
        <div className="review-info-container">
            <div className="review-img-box">

            </div>
            <div className="review-info-box">
                <div className="review-info-con">
                    <p className="review-name">
                        장승훈
                        <span className="review-number">
                            12
                        </span>
                    </p>
                    <span className="info-con">2024.02.05</span>
                </div>
                <div className="review-info-con">
                    ★★★★★
                    <span>회원명</span>
                </div>
                <div className="review-info-con">
                    <div className="consulting-time">
                        <p>(통화 10~30분)</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewInfo;