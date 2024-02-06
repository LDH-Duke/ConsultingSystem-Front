import React, { useEffect, useState } from 'react';
import { QuestionPresenter } from "./QuestionPresenter";
import API from '../../../api/API';
import { useParams } from 'react-router-dom';

const QuestionContainer = ({
    navigate
}) => {

    const [content, setContent] = useState('');
    const [counselor, setCounselor] = useState();

    const { counselor_id } = useParams();

    useEffect(() => {
        (async () => {
            const counselorData = await API.getCounselor(counselor_id);
            setCounselor(counselorData.data);
            
        })();
    }, [])

    const onSubmit = async () => {

        const data = {
            content: content
        };

        const result = await API.postQuestionToCounselor(counselor_id, data);
        console.log(result)
    }

    return(
        <QuestionPresenter
            navigate={navigate}
            counselor={counselor}
            content={content}
            setContent={setContent}
            onSubmit={onSubmit}
        />
    )
}

export default QuestionContainer;