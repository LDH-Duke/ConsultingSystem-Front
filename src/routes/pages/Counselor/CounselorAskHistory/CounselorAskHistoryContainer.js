import React, { useEffect, useState } from "react";
import { CounselorAskHistoryPresenter } from "./CounselorAskHistoryPresenter";
import cookie from "../../../../cookie";
import API from "../../../../api/API";

const CounselorAskHistoryContainer = () => {
    const [asks, setAsks] = useState([]);

    useEffect (() => {
        (async () => {
            const id = cookie.getCookie('id')

            const getCounselorAskHistory = await API.getAskListForCounselor(id);

            setAsks(getCounselorAskHistory.data);
        })();
    }, [])

    return(
        <CounselorAskHistoryPresenter 
        asks={asks}
        />
    )
}

export default CounselorAskHistoryContainer;