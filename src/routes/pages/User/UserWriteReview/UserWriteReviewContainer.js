import React, { useState }from "react";
import { UserWriteReviewPresenter } from "./UserWriteReviewPresenter";
import cookie from "../../../../cookie";
import { API } from "../../../../api";

const UserWriteReviewContainer = () => {



    const [content, setContent] = useState('');
    const [score, setScore] = useState(0);


    const writeReview = async() => {

        const user_id = cookie.getCookie('id');

        const data = {
            user_id: user_id,
            counselor_id: 4,
            content: content,
            score: score
        }
        const result = await API.postReview(data);
        console.log(result)
    }

    return (
        <UserWriteReviewPresenter
            writeReview={writeReview}

            setScore={setScore}

            content={content}
            setContent={setContent}
        />
    )
}

export default UserWriteReviewContainer;