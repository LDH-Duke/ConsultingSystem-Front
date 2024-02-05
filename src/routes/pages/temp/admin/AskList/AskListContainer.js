import React, { useEffect, useState } from "react";
import { AskListPresenter } from './AskListPresenter';
import { API } from '../../../../api'

const AskListContainer = () => {

    const [asks, setAsks] = useState([]);

    useEffect( () => {
        (async () => {

            const getAsksData = await API.getAsks();
            setAsks(getAsksData.data);

        })();
    }, [])

    return (
        
        <AskListPresenter
            asks={asks}
        />
    )
}

export default AskListContainer;