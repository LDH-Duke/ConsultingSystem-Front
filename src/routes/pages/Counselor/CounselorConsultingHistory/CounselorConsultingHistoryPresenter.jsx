import React from "react";
import Layout from "../../../../components/Layout/Layout";
import "./CounselorConsultingHistory.css"
import { ConsultingHistoryList } from "./components/ConsultingHistoryList";



export const CounselorConsultingHistoryPresenter = ({
    QuestionInfo,
    items,
    Panel,
    Collapse
}) => {
    return(
        <Layout nav={0}>
            <ConsultingHistoryList
                QuestionInfo={QuestionInfo}
                items={items}
                Panel={Panel}
                Collapse={Collapse}/>
        </Layout>
    )
}