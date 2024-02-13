import React from "react";
import Layout from '../../../../components/Layout/Layout';
import { Ask } from "./components/Ask";

export const UserAskPresenter = ({
    setContent,

    onSubmit
}) => {
    return(
        <Layout nav={0}>
            <h3>상담사 문의하기</h3>
            <Ask 
            setContent={setContent}
            
            onSubmit={onSubmit}
            />
        </Layout>
    )
}