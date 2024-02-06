import { useEffect } from "react";
import React, { useState } from "react";
import { CounselorPresenter } from "./CounselorPresenter";
import SubHeader from "../../../components/SubHeader";
import cookie from "../../../cookie";
import API from "../../../api/API";

const CounselorContainer = ({
    switchChecked,
    handleSwitchChange,
}) => {

    const [counselor, setCounselor] = useState({})
    // 핸들러 관련 부분
    const [buttonchecked, setbuttonchecked] = useState('');

    // 여기 데이터 받아오면 됨
    const [recentRequestData, setRecentRequestData] = useState([
        { name: "김건우" },
        { name: "허관" },
        { name: "임준오" },
        { name: "김강민" },
        { name: "장우영" },
    ]);

    const removeSlider = (rejectedName) => {
        // 배열에서 해당 이름의 데이터를 필터링하여 제거
        const updatedRequestData = recentRequestData.filter(item => item.name !== rejectedName);

        // 상태를 업데이트하여 화면을 다시 렌더링
        setRecentRequestData(updatedRequestData);

    }

    const buttonAccept = (rejectedName) => {
        alert('상담을 수락하셨습니다.')
        removeSlider(rejectedName);
    };

    const buttonReject = (rejectedName) => {
        alert('상담을 거절하셨습니다.');
        // 다른 상태를 업데이트
        removeSlider(rejectedName);
    };

    useEffect(() => {
        (async() => {

        const counselor_id = cookie.getCookie('id');

        const {data} = await API.getCounselor(counselor_id);

        setCounselor(data)})();
    }, []);

    return (
        <CounselorPresenter
            buttonchecked={buttonchecked}
            buttonAccept={buttonAccept}
            buttonReject={buttonReject}
            recentRequestData={recentRequestData}
            counselor = {counselor}
        />
    );
};

export default CounselorContainer;
