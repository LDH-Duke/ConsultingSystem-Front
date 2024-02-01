import React, { useState, useEffect } from "react";
import { ReviewPresenter } from "./ReviewPresenter";
import { API } from '../../../api';

const ReviewContainer = () => {

    // 리뷰 전체 조회
    const [reviews, setReviews] = useState([]);

    const [counselors, setCounselors] = useState([]);
    
    useEffect(() => {
        (async() => {

            const counselorsData = await API.getCounselors();
            setCounselors(counselorsData.data);

            // 리뷰 데이터
            const reviewsData = await API.getReviews();
            setReviews(reviewsData.data);
        })();
    }, [])


    return (
        <ReviewPresenter
            counselors={counselors}
            reviews={reviews}
        />
    )
}

export default ReviewContainer;