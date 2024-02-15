import React, { useState, useEffect } from "react";
import { API } from '../../../../api';
import { ReviewPresenter } from "./ReviewPresenter";
import { useNavigate } from "react-router-dom";

const ReviewContainer = () => {
    const navigate = useNavigate();

    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [reviews, setReviews] = useState([]);
    const [counselors, setCounselors] = useState([]);

    useEffect(() => {
        (
            async () => {
                /**
                 * 상담사 전체 조회
                 */
                const counselorsData = await API.getCounselors();
                if (counselorsData.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '상담사 전체 조회 중 에러가 발생하였습니다.'
                    });
                    return;
                }

                setCounselors(counselorsData.data);

                /**
                 * 후기 전체 조회
                 */
                const reviewsData = await API.getReviews();
                if (reviewsData.status === 409) {
                    // 후기 전체 조회 실패
                    setError({
                        isError: true,
                        errorMsg: '후기 전체 조회에 실패하였습니다.'
                    });
                    return;
                }

                if (reviewsData.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '후기 전체 조회 중 에러가 발생하였습니다.'
                    });
                    return;
                }

                setReviews(reviewsData.data);

            }
        )();
    }, [])

    const goTo = (link) => {
        navigate(link);
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
        <ReviewPresenter
            reviews={reviews}
            counselors={counselors}
            goTo={goTo}

            error={error}
            checkError={checkError}
        />
    )
}

export default ReviewContainer;