import React, { useState, useEffect } from "react";
import { API } from '../../../../api';
import { ReviewPresenter } from "./ReviewPresenter";
import { useNavigate } from "react-router-dom";

const ReviewContainer = () => {
    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);
    const [counselors, setCounselors] = useState([]);

    useEffect(() => {
        (async () => {

            /**
             * 상담사 전체 조회
             */
            const counselorsData = await API.getCounselors();
            setCounselors(counselorsData.data);

            /**
             * 후기 전체 조회
             */
            const reviewsData = await API.getReviews();
            setReviews(reviewsData.data);

        })();
    }, [])

    const goTo = (link) => {
        navigate(link);
    }

    return (

        <ReviewPresenter
            reviews={reviews}
            counselors={counselors}
            goTo={goTo}
        />
    )
}

export default ReviewContainer;