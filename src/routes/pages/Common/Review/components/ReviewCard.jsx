import React from "react";
import "./ReviewCard.css";
import CounselorInfo from "./CounselorInfo";
import ReviewCategory from "./ReviewCategory";
import ReviewComment from "./ReviewComment";

const ReviewCard = ({
    reviews
}) => {
    return (
        <>
            {
                reviews.map((review) => (
                    <div className="review-card-container">
                        <CounselorInfo
                            review={review}
                        />
                        <ReviewCategory
                            review={review}
                        />
                        <ReviewComment
                            review={review}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default ReviewCard;