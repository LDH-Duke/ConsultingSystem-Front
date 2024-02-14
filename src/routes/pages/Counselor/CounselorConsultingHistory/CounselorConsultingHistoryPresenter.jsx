import React from "react";
import Layout from "../../../../components/Layout/Layout";
import "./CounselorConsultingHistory.css"
import { ConsultingBox } from "./components/ConsultingBox";

export const CounselorConsultingHistoryPresenter = ({
    QuestionInfo,
}) => {
    return(
        <Layout nav={0}>
            <div className="History-layout">
                <ConsultingBox QuestionInfo = {QuestionInfo} >
                </ConsultingBox>
            </div>
        </Layout>
    )
}