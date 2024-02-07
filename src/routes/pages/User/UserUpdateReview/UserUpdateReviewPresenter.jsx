import React from "react";
import "./UserUpdateReview.css";
import WriteReview from "../UserWriteReview/components/WriteReview";
import Layout from "../../../../components/Layout/Layout";

export const UserUpdateReviewPresenter = ({

}) => {
    return (
        <Layout nav={1}>
            <WriteReview
                isUpdate={true}
            />
        </Layout>
    )
}