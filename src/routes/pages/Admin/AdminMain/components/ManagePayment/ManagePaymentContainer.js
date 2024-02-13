import React, { useEffect, useState } from "react";
import { ManagePaymentPresenter } from "./ManagePaymentPresenter";
import API from '../../../../../../api/API';

const ManagePaymentContainer = () => {
    const [coinHistorys, setCoinHistorys] = useState([]);

    useEffect(() => {
        (
            async () => {
                const { resultData } = await API.getCoinHistorys();

                console.log(resultData);

                // TODO: API연결 필요
                setCoinHistorys(resultData);
            }
        )();
    }, []);

    return (
        <ManagePaymentPresenter
            coinHistorys={coinHistorys}
        />
    )
}

export default ManagePaymentContainer;