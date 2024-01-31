import React, { useState, useEffect } from "react";
import { ReviewPresenter } from "./ReviewPresenter";
import { API } from '../../../api';

const ReviewContainer = () => {

    
    useEffect(() => {
        (async() => {
            const result = await API.getReviews();
            setReviews(result);
        })();
    }, [])



    /**
     * 임시 상담사 데이터
     */
    const [counselors, setCounselors] = useState([
        {
            counselor_id: 1,
            name: '허관',
            category: '진로',
            price: 1000,
            rank: '브론즈',
            status: false,
            introduce: '가',
        },
        {
            counselor_id: 2,
            name: '김권후',
            category: '대선',
            price: 2000,
            rank: '실버',
            status: true,
            introduce: '나'
        },
        {
            counselor_id: 3,
            name: '김건우',
            category: '화이트',
            price: 3000,
            rank: '골드',
            status: false,
            introduce: '다'
        }
    ]);



    /**
     * 임시 review_item 데이터
     */
    const [reviews, setReviews] = useState([
        {
            review_item_id: 1,
            review_score: 5,
            review_content: '김권후는 사람인가?',
            user_id: 1,
            review_id: 1
        },
        {
            review_item_id: 2,
            review_score: 4,
            review_content: '김건우는 사람인가?',
            user_id: 2,
            review_id: 2
        },
        {
            review_item_id: 3,
            review_score: 3,
            review_content: '이동희는 사람인가?',
            user_id: 3,
            review_id: 3
        }
    ]);

    return (
        <ReviewPresenter counselors={counselors} reviews={reviews} />
    )
}

export default ReviewContainer;