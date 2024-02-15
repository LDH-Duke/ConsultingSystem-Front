import React, { useEffect, useState } from "react";
import { CounselorCoinPresenter } from "./CounselorCoinPresenter";
import cookie from "../../../../cookie";
import API from "../../../../api/API";

const CounselorCoinContainer = () => {
    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [counselor, setCounselor] = useState({});

    const [havecoin, setHavecoin] = useState(0);

    useEffect(() => {
        (
            async () => {
                const counselor_id = await cookie.getCookie('id');
                if (counselor_id === null) {
                    // 로그인 필요
                    setError({
                        isError: true,
                        errorMsg: '로그인이 필요합니다.',
                    });
                    return;
                }

                const getCounselorInfo = await API.getCounselor(counselor_id);
                if (getCounselorInfo.code === 500) {
                    // 서버 연결 안됨
                    setError({
                        isError: true,
                        errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
                    });
                    return;
                }

                if (getCounselorInfo.status === 404) {
                    // 수정 실패
                    setError({
                        isError: true,
                        errorMsg: '회원 정보 조회에 실패하였습니다.',
                    });
                    return;
                }

                if (getCounselorInfo.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '회원 정보 조회 중 에러가 발생하였습니다.',
                    });
                    return;
                }

                setCounselor(getCounselorInfo.data);
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
        <CounselorCoinPresenter
            counselor={counselor}

            error={error}
            checkError={checkError}
        />
    )
}

export default CounselorCoinContainer;