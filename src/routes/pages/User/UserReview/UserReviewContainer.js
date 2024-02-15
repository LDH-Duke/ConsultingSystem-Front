import React, { useEffect, useState } from "react";
import { UserReviewPresenter } from "./UserReviewPresenter";
import { API } from "../../../../api"
import { useNavigate, useParams } from "react-router-dom";
import cookie from '../../../../cookie';

const UserReviewContainer = () => {
    const navigate = useNavigate();

    // const user_id = useParams();

    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (
            async () => {

                const user_id = cookie.getCookie('id');

                const reviewsData = await API.getUserReviews(user_id);
                if (reviewsData.status === 409) {
                    // 리뷰 조회 실패
                    setError({
                        isError: true,
                        errorMsg: '후기 조회를 실패하였습니다.'
                    });
                    return;
                } 
                
                if (reviewsData.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '후기 조회 중 에러가 발생하였습니다.'
                    });
                    return;
                }

                setReviews(reviewsData.data);
            }
        )();
    }, []);

    const reviewUpdate = (review_item_id) => {
        navigate(`/user/updatereview/${review_item_id}`);
    }

    /**
     * 에러 처리 함수
     */
    const checkError = () => {
        setError({
            isError: false,
            errorMsg: '',
        });
    }

    return (
        <UserReviewPresenter
            reviews={reviews}
            reviewUpdate={reviewUpdate}
        />
    )
}

export default UserReviewContainer;