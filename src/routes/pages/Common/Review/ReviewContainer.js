import React, { useState, useEffect } from "react";
import { API } from '../../../../api';
import { ReviewPresenter } from "./ReviewPresenter";

const ReviewContainer = () => {

    const [reviews, setReviews] = useState([]);
    const [counselors, setCounselors] = useState([]);

    useEffect(() => {
        (async() => {

            /**
             * 후기 전체 조회
             */
            const reviewsData = await API.getReviews();
            setReviews(reviewsData.data);
            console.log(reviewsData.data)

            /**
             * 상담사 전체 조회
             */
            const counselorsData = await API.getCounselors();
            setCounselors(counselorsData.data);
            console.log(counselorsData.data);
            
        })();
    }, [])

    return (

        <ReviewPresenter
            reviews={reviews}
            counselors={counselors}
        />
    )
}

export default ReviewContainer;