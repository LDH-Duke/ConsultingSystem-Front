import React, { useEffect, useState } from "react";
import { RequestCounselorPresenter } from "./RequestCounselorPresenter";
import API from '../../../../../../api/API';

const RequestConselorContainer = () => {
    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [counselors, setCounselors] = useState([]);

    useEffect(() => {
        (
            async () => {
                const data = await API.getCounselors();
                if (data.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '상담사 전체 조회 중 에러가 발생하였습니다.'
                    });
                    return;
                }

                console.log(data);

                setCounselors(data.data);
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
        <RequestCounselorPresenter
            counselors={counselors}

            error={error}
            checkError={checkError}
        />
    )
}

export default RequestConselorContainer;