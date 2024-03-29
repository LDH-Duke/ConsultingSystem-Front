import React from "react";
import "./CounselorReview.css";
import ReviewCard from "../../Review/components/ReviewCard";
import { Link } from "react-router-dom";

const CounselorReview = ({
    reviews,
    counselor_id
}) => {
    return (
        <div>
            <Link to={`/user/review/write/${counselor_id}`}><button>후기 작성하기</button></Link>
            <ReviewCard
                reviews={reviews}
            />
        </div>
    )
}

export default CounselorReview;