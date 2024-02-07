import React from "react";
import "./CounselorReview.css";
import ReviewList from "../../Review/components/ReviewList";

const CounselorReview = ({
    reviews,
    counselor
}) => {
    return (
        <div>
            <ReviewList
                reviews={reviews}
                counselor={counselor}
            />
        </div>
    )
}

export default CounselorReview;