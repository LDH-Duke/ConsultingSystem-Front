import React, { useState } from "react";
import { UserUpdateReviewPresenter } from "./UserUpdateReviewPresenter";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../../../../api";

const UserUpdateReviewContainer = () => {
    const navigate = useNavigate();
    const { review_item_id } = useParams();

    const [content, setContent] = useState('');

    /**
     * 후기 수정
     */
    const updateReview = async () => {
        const body = {
            content,
            score: 0,
        }

        const result = await API.putReview(review_item_id, body);

        if (result.status === 409) {
            // 리뷰 수정 실패

            return;
        }

        // 리뷰 수정 성공
        navigate(-1);
    }

    /**
     * 후기 삭제
     */
    const deleteReview = async () => {
        const result = await API.deleteReview(review_item_id);

        if (result.status === 409) {
            // 후기 삭제 실패

            return;
        }

        // 후기 삭제 성공
        navigate(-1);
    }

    /**
     * 뒤로가기
     */
    const goBack = () => {
        navigate(-1);
    }

    return (
        <UserUpdateReviewPresenter
            content={content}
            setContent={setContent}

            updateReview={updateReview}
            deleteReview={deleteReview}

            goBack={goBack}
        />
    )
}

export default UserUpdateReviewContainer;