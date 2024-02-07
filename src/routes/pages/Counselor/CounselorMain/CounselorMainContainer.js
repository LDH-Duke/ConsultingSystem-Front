import React, { useEffect, useState } from "react";
import { CounselorMainPresenter } from "./CounselorMainPresenter";
import API from "../../../../api/API";
import cookie from "../../../../cookie";

const CounselorMainContainer = () => {

    const [counselor, setCounselor] = useState([]);

    useEffect(() => {
        (async() => {
            
            const counselor_id = cookie.getCookie('id');

            const {data} = await API.getCounselor(counselor_id);

            setCounselor(data);
        })();
    }, []);

    return(
        <CounselorMainPresenter counselor = {counselor} />
    )
}

export default CounselorMainContainer;