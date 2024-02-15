import React, { useEffect, useState } from "react";
import { CounselorProfilePresenter } from "./CounselorProfilePresenter";
import API from "../../../../api/API";
import cookie from "../../../../cookie";

const CounselorProfileContainer = () => {
    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [counselor, setCounselor] = useState({});

    // 현재 상담사 프로필 정보 확인 함수
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
                    // 회원 정보 없음
                    setError({
                        isError: true,
                        errorMsg: '회원 정보가 존재하지 않습니다.',
                    });
                    return;
                }

                if (getCounselorInfo.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '회원 정보를 불러오는 중 에러가 발생하였습니다.',
                    });
                    return;
                }

                setCounselor(getCounselorInfo.data);
            }
        )();
    }, [])

    // 프로필 수정 함수
    const onSubmit = async () => {
        const counselor_id = await cookie.getCookie('id');
        if (counselor_id === null) {
            // 로그인 필요
            setError({
                isError: true,
                errorMsg: '로그인이 필요합니다.',
            });
            return;
        }

        const postCounselorInfo = await API.putCounselorProfile(counselor_id, counselor);
        if (postCounselorInfo.code === 500) {
            // 서버 연결 안됨
            setError({
                isError: true,
                errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
            });
            return;
        }

        if (postCounselorInfo.status === 409) {
            // 수정 실패
            setError({
                isError: true,
                errorMsg: '회원 정보 수정에 실패하였습니다.',
            });
            return;
        }

        if (postCounselorInfo.status === 500) {
            // 에러 발생
            setError({
                isError: true,
                errorMsg: '회원 정보 수정 중 에러가 발생하였습니다.',
            });
            return;
        }

        // 페이지 이동

    }

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
        <CounselorProfilePresenter
            counselor={counselor}
            setCounselor={setCounselor}
            onSubmit={onSubmit}

            error={error}
            checkError={checkError}
        />
    )
}

export default CounselorProfileContainer;