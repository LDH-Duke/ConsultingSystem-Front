import React, { useState } from "react";
import { UserUpdateReviewPresenter } from "./UserUpdateReviewPresenter";
import { API } from "../../../../api";
import { useParams } from "react-router-dom";

const UserUpdateReviewContainer = () => {

    const [content, setContent] = useState('');
    const [score, setScore] = useState(0);

    const { review_id } = useParams();

    const updateReview = async() => {

        console.log('call updateReview');

        const data = {
            review_id: review_id,
            content: content,
            score: score
        }

        const result = await API.updateReview(data);
    }

    const deleteReview = async() => {

        console.log('call deleteReview');

        const result = await API.deleteReview(review_id);
    }

    return (

        <UserUpdateReviewPresenter
            content={content}
            setContent={setContent}

            score={score}
            setScore={setScore}

            updateReview={updateReview}
            deleteReview={deleteReview}
        />
    )
}

export default UserUpdateReviewContainer;