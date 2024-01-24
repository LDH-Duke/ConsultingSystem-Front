import React  from "react";
import Title from "../../../components/Title";
import ReviewCard from './components/ReviewCard';
import { Button } from "antd";
import "./Review.css";
import { Link } from "react-router-dom";

export const ReviewPresenter = () => {
    return(
        <div className="review-container">
            <div className="review-wrap">
                <div className="title">
                    <Title title = {'후기 내역'} />
                </div>
                <div className="review-top">
                    <div className="review-text">
                        <div className='review-text-box'>
                            <h2>리얼 상담 후기</h2>
                            <span>100,000건</span>
                        </div>
                        <div className='review-text-box'>
                            <h2>5점 만족도</h2>
                            <span>90%</span>
                        </div>
                    </div>
                    <div className='review-reward-text'>
                        <span>후기 작성시 포인트를 드립니다.</span>
                    </div>
                </div>
            </div>
            <div className='review-content-box'>
                <div className='review-content-inner'>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />

                </div>
            </div>
        </div>
    )
}