import React, { useEffect, useState } from "react";
import { CheckAskPresenter } from './CheckAskPresenter';
import { API } from '../../../api';

const CheckAskContainer = () => {

    const [asks, setAsks] = useState([]);

    useEffect( () => {
        (async () => {

            const getAsksData = await API.getAsks();
            setAsks(getAsksData.data);

        })();
    }, [])

    return (
        
        <CheckAskPresenter
            asks={asks}
        />
    )
}

export default CheckAskContainer;