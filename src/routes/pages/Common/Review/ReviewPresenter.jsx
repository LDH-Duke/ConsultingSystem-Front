import React from "react";
import "./Review.css";
import Layout from "../../../../components/Layout/Layout";
import ReviewCard from "./components/ReviewCard";

export const ReviewPresenter = ({
    reviews,
    goTo
}) => {
    return (
        <Layout nav={1}>
            <ReviewCard
                reviews={reviews}
                isShowButton={false}
                goTo={goTo}
            />
        </Layout>
    )
}