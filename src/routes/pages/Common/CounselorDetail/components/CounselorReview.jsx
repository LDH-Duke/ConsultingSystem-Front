import React from "react";
import "./CounselorReview.css";
import ReviewCard from "../../Review/components/ReviewCard";

const CounselorReview = ({
    reviews
}) => {
    return (
        <div>
            <ReviewCard
                reviews={reviews}
            />
        </div>
    )
}

export default CounselorReview;