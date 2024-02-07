import React, { useEffect, useState } from "react";
import { UpdateAskAdminPresenter } from "./UpdateAskAdminPresenter";
import { useParams } from "react-router-dom";
import API from "../../../../api/API";

const UpdateAskAdminContainer = () => {
    const { ask_id } = useParams();

    const [ask, setAsk] = useState('');

    const onUpdate = async() => {
        const askno = ask_id

        const body = {
            content: ask
        }

        const putAskInfo = await API.putAsks(askno, body)
    }

    return(
        <UpdateAskAdminPresenter setAsk = {setAsk} onUpdate = {onUpdate}/>
    )
}

export default UpdateAskAdminContainer;