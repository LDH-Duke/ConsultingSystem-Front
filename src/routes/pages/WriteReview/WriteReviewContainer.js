import React, { useState }from "react";
import { WriteReviewPresenter } from './WriteReviewPresenter'
import API from '../../../api/API';
import cookie from '../../../cookie';

const WriteReviewContainer = ({
    navigate
}) => {



    /**
     * 임시 데이터
     */
    const [counselor, setCounselor] = useState(
        {
            counselor_id: 1,
            name: '허관',
            category: '진로',
            price: 1000,
            rank: '브론즈',
            status: false,
            introduce: '가'
        }
    );



    /**
     * 후기 작성
     * ---
     * textarea, score(rating) 추가 필요
     */
    const writeReview = async () => {

        const userId = cookie.getCookie('id');

        const data = {
            user_id: userId,
            counselor_id: counselor.counselor_id,
            content: '장난',
            score: 1
        }

        const result = await API.postReview(data);

    }

    return (
        <WriteReviewPresenter navigate={navigate} counselor={counselor} writeReview={writeReview}/>
    )
}

export default WriteReviewContainer;