import React, { useEffect, useState } from "react";
import { CounselorMainPresenter } from "./CounselorMainPresenter";
import API from "../../../../api/API";
import cookie from "../../../../cookie";

const CounselorMainContainer = () => {
    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [counselor, setCounselor] = useState([]);

    useEffect(() => {
        (
            async () => {

                const counselor_id = cookie.getCookie('id');
                if (counselor_id === null) {
                    // 로그인 필요
                    setError({
                        isError: true,
                        errorMsg: '로그인이 필요합니다.',
                    });
                    return;
                }

                const result = await API.getCounselor(counselor_id);
                if (result.code === 500) {
                    // 서버 연결 안됨
                    setError({
                        isError: true,
                        errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
                    });
                    return;
                }

                if (result.status === 404) {
                    // 수정 실패
                    setError({
                        isError: true,
                        errorMsg: '회원 정보 조회에 실패하였습니다.',
                    });
                    return;
                }

                if (result.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '회원 정보 조회 중 에러가 발생하였습니다.',
                    });
                    return;
                }

                setCounselor(result.data);
            }
        )();
    }, []);

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
        <CounselorMainPresenter
            counselor={counselor}

            error={error}
            checkError={checkError}
        />
    )
}

export default CounselorMainContainer;