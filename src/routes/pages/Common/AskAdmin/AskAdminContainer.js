import React, { useEffect, useState } from "react";
import { AskAdminPresenter } from "./AskAdminPresenter";
import API from "../../../../api/API";
import cookie from "../../../../cookie";
import { useParams } from "react-router-dom";

const AskAdminContainer = () => {
    const { params } = useParams();

    const [content, setContent] = useState();
    const [asks, setAsks] = useState([]);
    const [check, setCheck] = useState(false)

    const onSubmit = async() => {
        const body = {
            content
        }

        const askadmininfo = await API.postAskAdmin(body);
    }

    useEffect (() => {
        (async () => {
            const id = cookie.getCookie('id')
            const type = cookie.getCookie('userType')
    
            const getAdminHistory = 
                params === "counselor" ?
                await API.getAskForCounselor(id) :
                await API.getAskForUser(id);
            
                console.log(type)
            setAsks(getAdminHistory.data);
        })();
    }, [])


    return(
        <AskAdminPresenter onSubmit = {onSubmit} setContent = {setContent} asks = {asks}/>
    )
}

export default AskAdminContainer;