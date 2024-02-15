import React, { useState } from "react";
import { UserWriteReviewPresenter } from "./UserWriteReviewPresenter";
import cookie from "../../../../cookie";
import { API } from "../../../../api";
import { useNavigate, useParams } from "react-router-dom";

const UserWriteReviewContainer = () => {
    const navigate = useNavigate();

    const {counselor_id} = useParams();

    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [content, setContent] = useState('');
    const [score, setScore] = useState(0);


    /**
     * score 관리
     */
    const handleScore = async (score) => {
        setScore(score)
    };


    /**
     * 후기 작성
     */
    const writeReview = async () => {
        const user_id = cookie.getCookie('id');

        if (user_id === null) {
            // 로그인 필요
            setError({
                isError: true,
                errorMsg: '로그인이 필요합니다.',
            });
            return;
        }

        const data = {
            user_id: user_id,
            counselor_id: counselor_id,
            content: content,
            score: score
        }
        const result = await API.postReview(data);

        if (result.status === 409) {
            // 작성 실패
            setError({
                isError: true,
                errorMsg: '후기 작성을 실패하였습니다.',
            });
            return;
        } 
        
        if (result.status === 500) {
            // 에러 발생
            setError({
                isError: true,
                errorMsg: '후기 작성 중 에러가 발생하였습니다.',
            });
            return;
        }

        navigate('/user/mymenu');
    }

    const goBack = () => {
        navigate(-1);
    }

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
        <UserWriteReviewPresenter
            writeReview={writeReview}

            score={score}
            setScore={setScore}
            handleScore={handleScore}

            content={content}
            setContent={setContent}

            goBack={goBack}
            goTo={goTo}

            error={error}
            checkError={checkError}
        />
    )
}

export default UserWriteReviewContainer;