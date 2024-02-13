import React, { useState } from "react";
import { CounselorConsultingHistoryPresenter } from "./CounselorConsultingHistoryPresenter";

const CounselorConsultingHistoryContainer = ({

}) => {


    const [QuestionInfo, SetQuestionInfo] = useState({
        Name : '임준오 님',
        Category : '타로 상담',
        Status : '상담 완료'
    });

    
    return(
        <CounselorConsultingHistoryPresenter
            QuestionInfo = {QuestionInfo} />
    )
}

export default CounselorConsultingHistoryContainer;