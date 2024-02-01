import React, { useState } from "react";
import { AskAdminPresenter } from "./AskAdminPresenter";
import API from "../../../api/API";
import cookie from "../../../cookie";

const AskAdminContainer = () => {
    const [content, setContent] = useState()

    const onSubmit = async() => {

        const body = {
            content
        }

        const askadmininfo = await API.postaskadmin(body);
        console.log(askadmininfo)
    } 

    return (
        <AskAdminPresenter setContent={setContent} onSubmit={onSubmit} />
    )
}

export default AskAdminContainer;