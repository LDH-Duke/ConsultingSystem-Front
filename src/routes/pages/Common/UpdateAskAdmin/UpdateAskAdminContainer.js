import React, { useEffect, useState } from "react";
import { UpdateAskAdminPresenter } from "./UpdateAskAdminPresenter";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../../../api/API";

const UpdateAskAdminContainer = () => {
    const { ask_id } = useParams();

    const [ask, setAsk] = useState('');

    const navigate = useNavigate();

    const onUpdate = async() => {
        const askno = ask_id

        const body = {
            content: ask
        }

        const putAskInfo = await API.putAsks(askno, body)
        navigate(-1)
    }

    return(
        <UpdateAskAdminPresenter setAsk = {setAsk} onUpdate = {onUpdate}/>
    )
}

export default UpdateAskAdminContainer;