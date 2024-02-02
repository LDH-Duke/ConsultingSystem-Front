import React, { useEffect, useState } from "react";
import { CounselorAskListPresenter } from "./CounselorAskListPresenter";
import { API } from "../../../api";
import cookie from "../../../cookie";

const CounselorAskListContainer = () => {

    const [asks, setAsks] = useState([]);

    useEffect( () => {
        (async () => {

            const counselor_id = cookie.getCookie('id')

            const getcounseloraskinfo = await API.getAskForCounselor(counselor_id);
            setAsks(getcounseloraskinfo.data);

        })();
    })

    return (
        <CounselorAskListPresenter 
            asks = {asks}
        />
    )
}

export default CounselorAskListContainer;
