import React, { useEffect, useState } from 'react';
import { QuestionPresenter } from "./QuestionPresenter";
import API from '../../../api/API';
import { useParams } from 'react-router-dom';

const QuestionContainer = () => {
    const [name] = useState('클로이');

    const [user, setUser] = useState([])
    const [question, setQuestion] = useState([]);
    const [counselor, setCounselor] = useState([]);
    const params = useParams();

    useEffect(() => {
        const counselorinfo = API.getCounselor(params.counselor_id);
        setCounselor(counselorinfo)
    }, [])

    const onSubmit = () => {
        const questioninfo = API.postquestion({question, user_id: user.user_id, counselor_id : params.counselor_id});
    }

    return(
        <QuestionPresenter name = {name} counselor = {counselor}/>
    )
}

export default QuestionContainer;