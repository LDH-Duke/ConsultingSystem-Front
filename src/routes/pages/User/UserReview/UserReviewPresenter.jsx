import React from "react";
import "./UserReview.css";
import Layout from "../../../../components/Layout/Layout";
import ReviewCard from "../../Common/Review/components/ReviewCard";

export const UserReviewPresenter = ({
    reviews
}) => {
    return (
        <Layout nav={1}>
            <ReviewCard
                reviews={reviews}
                isShowButton={true}
            />
        </Layout>
    )
}