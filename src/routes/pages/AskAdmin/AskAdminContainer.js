import React, { useEffect, useState } from "react";
import { AskAdminPresenter } from "./AskAdminPresenter";
import API from "../../../api/API";
import cookie from "../../../cookie";

const AskAdminContainer = ({
    navigate
}) => {
    const [content, setContent] = useState()

    useEffect(() => {
        const id = cookie.getCookie('id');

        if(!id) {
            alert('로그인이 필요한 페이지입니다.')
            navigate('/sign')
        }
    }, [])

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