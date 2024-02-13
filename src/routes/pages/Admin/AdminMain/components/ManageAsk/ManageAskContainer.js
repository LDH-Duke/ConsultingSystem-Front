import React, { useEffect, useState } from "react";
import { ManageAskPresenter } from "./ManageAskPresenter";
import API from '../../../../../../api/API';

const ManageAskContainer = () => {
    const [asks, setAsks] = useState([]);

    useEffect(() => {
        (
            async () => {
                const getAsksData = await API.getAsks();
                
                setAsks(getAsksData.data);
            }
        )();
    }, []);

    return (
        <ManageAskPresenter
            asks={asks}
        />
    )
}

export default ManageAskContainer;