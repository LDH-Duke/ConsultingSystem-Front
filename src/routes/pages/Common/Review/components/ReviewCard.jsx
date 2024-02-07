import React from "react";
import "./ReviewCard.css";
import { Link } from "react-router-dom";
import { Rate } from "antd";

const ReviewCard = ({
    reviews,
    reviewUpdate,
    isShowButton,
}) => {
    return (
        <div className="review-card-container">
            <ul>
                {
                    reviews.map((review, idx) => {

                        return (                            
                            <li className={`reivew-item ${idx}`} key={`reivew-item ${idx}`}>
                                <div className="review-counselor">
                                    <div className="review-counselor-info">
                                        <div className="counselor-img">
                                            <img src="" alt="이미지"></img>
                                        </div>
                                        <div className="counselor-name">
                                            <span>{review['counselor.nickname']}</span>
                                        </div>
                                    </div>
                                    {
                                        isShowButton
                                        ?
                                        <div className="review-button">
                                            <Link to={`/user/review/update/${review['review_items.id']}`}>
                                                <button>수정하기</button>
                                            </Link>
                                        </div>
                                        :
                                        <></>
                                    }
                                </div>
                                <div className="review-user">
                                    <div className="user-name">
                                        <div>
                                            <span>{review['review_items.user.name']}</span>
                                            <Rate 
                                                disabled
                                                defaultValue={review['review_items.score']} // css 수정 필요
                                            />
                                        </div>
                                        <span>{review.createdAt}</span>
                                    </div>
                                    <div className="user-content">
                                        <span>{review['review_items.content']}</span>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }

            </ul>

            {/* {
                reviews.map((review) => (
                    <div className="review-card-container">
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
                        <div className="counsel-category">
                            <div>상담 분야</div>
                            <div>상담 스타일</div>
                        </div>
                        <div className="review-comment-container">
                            <span>
                                {review.content}
                            </span>
                        </div>
                    </div>
                ))
            } */}
        </div>
    )
}

export default ReviewCard;