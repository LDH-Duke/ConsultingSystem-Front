import React, { useEffect, useState } from "react";
import { UserUpdateReviewPresenter } from "./UserUpdateReviewPresenter";
import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { API } from "../../../../api";

const UserUpdateReviewContainer = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [reviewItemId, setReviewItemId] = useState(0);
    const [content, setContent] = useState('');

    const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const prevContent = queryParams.get("prev_content") || "";

    const [textAreaContent, setTextAreaContent] = useState('');


    useEffect(() => {
        const prevContent = searchParams.get('prev_content');
        const reviewItem = searchParams.get('review_item_id');
        
        setContent(prevContent);
        setReviewItemId(reviewItem);
    }, [])

    /**
     * 후기 수정
     */
    const updateReview = async () => {
        const body = {
            content,
            score: 0,
        }

        const result = await API.putReview(reviewItemId, body);

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
        const result = await API.deleteReview(reviewItemId);

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

            textAreaContent={textAreaContent}

            updateReview={updateReview}
            deleteReview={deleteReview}

            goBack={goBack}
        />
    )
}

export default UserUpdateReviewContainer;