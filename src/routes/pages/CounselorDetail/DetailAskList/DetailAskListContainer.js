import React, { useEffect, useState } from "react";
import { DetailAskListPresenter } from "./DetailAskListPresenter";
import { API } from "../../../../api";
import { useParams } from "react-router-dom";

const DetailAskListContainer = () => {

    const { counselor_id } = useParams();
    const [asks, setAsks] = useState([]);

    useEffect(() => {
        (async () => {

            const getAsksData = await API.getAskListForCounselor(counselor_id);
            console.log(getAsksData.data)
            setAsks(getAsksData.data)

        })();
    }, [])

    return (
        <DetailAskListPresenter
            asks={asks}
        />
    )
}

export default DetailAskListContainer;