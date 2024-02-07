import React, { useEffect, useState } from "react";
import { CounselorCoinPresenter } from "./CounselorCoinPresenter";
import cookie from "../../../../cookie";
import API from "../../../../api/API";

const CounselorCoinContainer = () => {
    const [counselor, setCounselor] = useState({})

    const [havecoin, setHavecoin] = useState(0)

    useEffect( () => {
        (async () => {
            const counselor_id = await cookie.getCookie('id')

            const getCounselorInfo = await API.getCounselor(counselor_id)
            setCounselor(getCounselorInfo.data)
        })();
    }, [])

    return(
        <CounselorCoinPresenter counselor = {counselor}/>
    )
}

export default CounselorCoinContainer;