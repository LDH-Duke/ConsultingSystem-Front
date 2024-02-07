import React from "react";
import "./UserWriteReview.css";
import Layout from "../../../../components/Layout/Layout";
import WriteReview from "./components/WriteReview";

export const UserWriteReviewPresenter = ({
    writeReview,
    setContent,
    content,
    setScore,
    score,
    handleScore,
    goBack,
    goTo,
}) => {
    return (
        <Layout nav={1}>
            <WriteReview
                isUpdate={false}
                writeReview={writeReview}
                setContent={setContent}
                content={content}
                setScore={setScore}
                score={score}
                handleScore={handleScore}
                goBack={goBack}
                goTo={goTo}
            />
        </Layout>
    )
}