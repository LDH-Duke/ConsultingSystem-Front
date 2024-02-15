import React, { useEffect, useState } from "react";
import { CounselorAskHistoryPresenter } from "./CounselorAskHistoryPresenter";
import cookie from "../../../../cookie";
import API from "../../../../api/API";

const CounselorAskHistoryContainer = () => {
    const [error, setError] = useState({
        isError: false,
        errorMsg: ''
    });
    const [asks, setAsks] = useState([]);

    useEffect(() => {
        (
            async () => {
                const id = cookie.getCookie('id');
                if (id === null) {
                    // 로그인 필요
                    setError({
                        isError: true,
                        errorMsg: '로그인이 필요합니다.',
                    });
                    return;
                }

                const getCounselorAskHistory = await API.getAskListForCounselor(id);
                if (getCounselorAskHistory.code === 500) {
                    // 서버 연결 안됨
                    setError({
                        isError: true,
                        errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
                    });
                    return;
                }

                if (getCounselorAskHistory.status === 404) {
                    // 문의 조회 실패
                    setError({
                        isError: true,
                        errorMsg: '문의 조회가 실패하였습니다.'
                    });
                    return;
                }

                if (getCounselorAskHistory.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '문의 조회 중 에러가 발생하였습니다.'
                    });
                    return;
                }

                setAsks(getCounselorAskHistory.data);
            }
        )();
    }, [])

    /**
     * 에러 처리 함수
     */
    const checkError = () => {
        setError({
            isError: false,
            errorMsg: '',
        });
    }

    return (
        <CounselorAskHistoryPresenter
            asks={asks}

            error={error}
            checkError={checkError}
        />
    )
}

export default CounselorAskHistoryContainer;