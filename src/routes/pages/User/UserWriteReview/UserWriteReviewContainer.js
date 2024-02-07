import React, { useState }from "react";
import { UserWriteReviewPresenter } from "./UserWriteReviewPresenter";
import cookie from "../../../../cookie";
import { API } from "../../../../api";
import { useNavigate } from "react-router-dom";

const UserWriteReviewContainer = () => {
    const navigate = useNavigate();

    const [content, setContent] = useState('');
    const [score, setScore] = useState(0);


    const writeReview = async() => {
        const user_id = cookie.getCookie('id');

        const data = {
            user_id: user_id,
            counselor_id: 1,
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

    return (
        <UserWriteReviewPresenter
            writeReview={writeReview}

            setScore={setScore}

            content={content}
            setContent={setContent}

            goBack={goBack}
        />
    )
}

export default UserWriteReviewContainer;