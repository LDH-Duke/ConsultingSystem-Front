import React from "react";
import "./Review.css";
import Layout from "../../../../components/Layout/Layout";
import ReviewList from "./components/ReviewList";

export const ReviewPresenter = ({
    reviews
}) => {
    return (
        <Layout nav={1}>
            <ReviewList
                reviews={reviews}
            />
        </Layout>
    )
}