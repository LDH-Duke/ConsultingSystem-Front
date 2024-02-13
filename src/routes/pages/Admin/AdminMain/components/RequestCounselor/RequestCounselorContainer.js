import React, { useEffect, useState } from "react";
import { RequestCounselorPresenter } from "./RequestCounselorPresenter";
import API from '../../../../../../api/API';

const RequestConselorContainer = () => {
    const [counselors, setCounselors] = useState([]);

    useEffect(() => {
        (
            async () => {
                const { data } = await API.getCounselors();

                console.log(data);

                setCounselors(data);
            }
        )();
    }, []);

    return (
        <RequestCounselorPresenter
            counselors={counselors}
        />
    )
}

export default RequestConselorContainer;