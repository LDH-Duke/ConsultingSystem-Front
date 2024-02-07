import React, { useEffect, useState } from "react";
import { UserReviewPresenter } from "./UserReviewPresenter";
import { API } from "../../../../api"
import { useParams } from "react-router-dom";
import cookie from '../../../../cookie';

const UserReviewContainer = () => {

    // const user_id = useParams();

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (async() => {

            const user_id = cookie.getCookie('id');

            const reviewsData = await API.getUserReviews(user_id);
            setReviews(reviewsData.data);

        })();
    }, []);

    return (
        <UserReviewPresenter
            reviews={reviews}
        />
    )
}

export default UserReviewContainer;