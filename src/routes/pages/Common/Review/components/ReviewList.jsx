import React from "react";
import "./ReviewList.css";
import ReviewCard from "./ReviewCard";

const ReviewList = ({
    reviews
}) => {

    return (
        <div className="review-list-container">
            <div className="review-list-wrap">
                <ReviewCard
                    reviews={reviews}
                />
            </div>
        </div>
    )
}

export default ReviewList;