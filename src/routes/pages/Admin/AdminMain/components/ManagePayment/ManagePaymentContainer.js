import React, { useEffect, useState } from "react";
import { ManagePaymentPresenter } from "./ManagePaymentPresenter";
import API from '../../../../../../api/API';

const ManagePaymentContainer = () => {
    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [coinHistorys, setCoinHistorys] = useState([]);

    useEffect(() => {
        (
            async () => {
                const resultData = await API.getCoinHistorys();
                if (resultData.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '결제 내역 전체 조회 중 에러가 발생하였습니다.'
                    });
                    return;
                }

                console.log(resultData);

                setCoinHistorys(resultData.data);
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
        <ManagePaymentPresenter
            coinHistorys={coinHistorys}

            error={error}
            checkError={checkError}
        />
    )
}

export default ManagePaymentContainer;