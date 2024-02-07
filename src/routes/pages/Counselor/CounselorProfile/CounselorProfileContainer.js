import React, { useEffect, useState } from "react";
import { CounselorProfilePresenter } from "./CounselorProfilePresenter";
import API from "../../../../api/API";
import cookie from "../../../../cookie";

const CounselorProfileContainer = () => {
    const [counselor, setCounselor] = useState({});

    // 현재 상담사 프로필 정보 확인 함수
    useEffect (() => {
        (async () => {
            const counselor_id = await cookie.getCookie('id')

            const getCounselorInfo = await API.getCounselor(counselor_id)
            setCounselor(getCounselorInfo.data)
        })();
    }, [])

    // 프로필 수정 함수
    const onSubmit = async() => {
        const counselor_id = await cookie.getCookie('id')

        const postCounselorInfo = await API.putCounselorProfile(counselor_id, counselor)
    }

    return(
        <CounselorProfilePresenter counselor = {counselor} setCounselor = {setCounselor} onSubmit = {onSubmit}/>
    )
}

export default CounselorProfileContainer;