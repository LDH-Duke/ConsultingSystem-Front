import React, { useEffect, useState } from 'react';
import { ReviewUpdatePresenter } from "./ReviewUpdatePresenter";
import API from '../../../api/API';
import { useParams } from 'react-router-dom';

const ReviewUpdateContainer = () => {

    const [name] = useState('클로이');
    const [counselor, setCounselor] = useState([]);

    const params = useParams();

    const updateReview = async() => {

        const data = {
            content: "허관",
            score: 5
        };

        const result = await API.updateReview(data);
    }

    const deleteReview = async() => {

        const result = await API.deleteReview(params);
    }

    return(
        <ReviewUpdatePresenter
            name={name}
            counselor={counselor}
            updateReview={updateReview}
            deleteReview={deleteReview}
        />
    )
}

export default ReviewUpdateContainer;