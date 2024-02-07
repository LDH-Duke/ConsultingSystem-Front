import React, { useEffect, useState } from "react";
import { UserReviewPresenter } from "./UserReviewPresenter";
import { API } from "../../../../api"
import { useNavigate, useParams } from "react-router-dom";
import cookie from '../../../../cookie';

const UserReviewContainer = () => {
    const navigate = useNavigate();

    // const user_id = useParams();

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        (async() => {

            const user_id = cookie.getCookie('id');

            const reviewsData = await API.getUserReviews(user_id);
            setReviews(reviewsData.data);

        })();
    }, []);

    const reviewUpdate = (review_item_id) => {
        navigate(`/user/updatereview/${review_item_id}`);
    }

    return (
        <UserReviewPresenter
            reviews={reviews}
            reviewUpdate={reviewUpdate}
        />
    )
}

export default UserReviewContainer;