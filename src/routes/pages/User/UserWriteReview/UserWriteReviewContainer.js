import React, { useState }from "react";
import { UserWriteReviewPresenter } from "./UserWriteReviewPresenter";
import cookie from "../../../../cookie";
import { API } from "../../../../api";
import { useNavigate, useParams } from "react-router-dom";

const UserWriteReviewContainer = () => {
    const navigate = useNavigate();

    const {counselor_id} = useParams();

    const [content, setContent] = useState('');
    const [score, setScore] = useState(0);


    /**
     * score 관리
     */
    const handleScore = async(score) => {
        setScore(score)
    };


    /**
     * 후기 작성
     */
    const writeReview = async() => {
        const user_id = cookie.getCookie('id');

        const data = {
            user_id: user_id,
            counselor_id: counselor_id,
            content: content,
            score: score
        }
        const result = await API.postReview(data);
        console.log(result)

        if (result.status === 200) {
            // 작성 성공
            navigate('/user/mymenu');
            return;
        }
    }

    const goBack = () => {
        navigate(-1);
    }

    const goTo = (link) => {
        navigate(link);
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
        />
    )
}

export default UserWriteReviewContainer;