import React from "react";
import Layout from "../../../../components/Layout/Layout";
import { CounselorBodyLayout } from "../../../../components/Layout/CounselorBody/CounselorBodyLayout";
import { Calendar } from "../../../../components/Layout/Calendar/Calendar";

export const CounselorMainPresenter = ({
    counselor
}) => {
    return(
        <Layout nav={0}>
            <Calendar />
            <CounselorBodyLayout />
            {counselor.name}
        </Layout>
    )
}