import React, { useEffect, useState } from "react";
import { ManageAskPresenter } from "./ManageAskPresenter";
import API from '../../../../../../api/API';

const ManageAskContainer = () => {
    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [asks, setAsks] = useState([]);

    useEffect(() => {
        (
            async () => {
                const getAsksData = await API.getAsks();
                if (getAsksData.status === 404) {
                    // 문의 조회 실패
                    setError({
                        isError: true,
                        errorMsg: '문의 조회에 실패하였습니다.'
                    });
                    return;
                }

                if (getAsksData.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '문의 조회 중 에러가 발생하였습니다.'
                    });
                    return;
                }

                setAsks(getAsksData.data);
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
        <ManageAskPresenter
            asks={asks}

            error={error}
            checkError={checkError}
        />
    )
}

export default ManageAskContainer;