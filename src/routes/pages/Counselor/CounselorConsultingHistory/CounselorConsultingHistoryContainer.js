import React, { useState } from "react";
import { CounselorConsultingHistoryPresenter } from "./CounselorConsultingHistoryPresenter";
import { Collapse } from "antd";

const CounselorConsultingHistoryContainer = ({
}) => {
    const [QuestionInfo, SetQuestionInfo] = useState({
        Name: '임준오 님',
        totaltime: '10min 20sec',
        usecoin: '100 Coin'
    });


    const text = `
    내용 추가되면 들어갈곳
    `;
    const items = [
        {
            contents: <p>{text}</p>,
        },
        {
            contents: <p>{text}</p>,
        },
        {
            contents: <p>{text}</p>,
        },
    ];



    const { Panel } = Collapse;


    return (
        <CounselorConsultingHistoryPresenter
            QuestionInfo={QuestionInfo}
            items={items}
            Panel={Panel}
            Collapse={Collapse} />
    )
}

export default CounselorConsultingHistoryContainer;