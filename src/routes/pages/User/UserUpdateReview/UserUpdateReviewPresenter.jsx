import React from "react";
import "./UserUpdateReview.css";
import WriteReview from "../UserWriteReview/components/WriteReview";
import Layout from "../../../../components/Layout/Layout";

export const UserUpdateReviewPresenter = ({
    content,
    setContent,

    textAreaContent,

    updateReview,
    deleteReview,

    goBack,
}) => {
    return (
        <Layout nav={1}>
            <WriteReview
                isUpdate={true}

                updateReview={updateReview}
                deleteReview={deleteReview}
                
                setContent={setContent}
                content={content}

                textAreaContent={textAreaContent}

                goBack={goBack}
            />
        </Layout>
    )
}