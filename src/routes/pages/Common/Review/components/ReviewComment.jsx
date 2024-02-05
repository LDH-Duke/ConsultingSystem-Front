import React from "react";
import "./ReviewComment.css";

const ReviewComment = ({
    review
}) => {
    return (
        <div className="review-comment-container">
            <span>
                {review.content}
            </span>
        </div>
    )
}

export default ReviewComment;