import React from "react";
import Layout from "../../../../components/Layout/Layout";
import { AskTable } from "./components/AskTable";

export const CounselorAskHistoryPresenter = ({
    asks
}) => {
    return(
        <Layout nav={0}>
            <p>문의 내역 조회</p>
            <AskTable 
            asks={asks}
            />
        </Layout>
    )
}