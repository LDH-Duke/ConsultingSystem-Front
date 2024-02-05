import React, { useEffect, useState }from "react";
import { WriteReviewPresenter } from './WriteReviewPresenter'
import API from '../../../api/API';
import cookie from '../../../cookie';
import { useParams } from "react-router-dom";

const WriteReviewContainer = ({
    navigate
}) => {

    const [content, setContent] = useState('');
    const [counselor, setCounselor] = useState();
    const [score, setScore] = useState(0);

    const { counselor_id } = useParams();

    useEffect( () => {
        (async () => {
            const counselorData = await API.getCounselor(counselor_id);
            setCounselor(counselorData.data);
                       
        })();
    }, [])

    /**
     * 후기 작성
     */
    const writeReview = async () => {

        const user_id = cookie.getCookie('id');

        const data = {
            user_id: user_id,
            counselor_id: counselor_id,
            content: content,
            score: score
        }
        const result = await API.postReview(data);
    }

    return (
        <WriteReviewPresenter
            navigate={navigate}
            counselor={counselor}
            writeReview={writeReview}
            content={content}
            setContent={setContent}
            score={score}
            setScore={setScore}
        />
    )
}

export default WriteReviewContainer;