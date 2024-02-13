import React, { useEffect, useState } from "react";
import { AskAdminPresenter } from "./AskAdminPresenter";
import API from "../../../../api/API";
import cookie from "../../../../cookie";
import { useNavigate, useParams } from "react-router-dom";

const AskAdminContainer = () => {
    const { params } = useParams();

    const [content, setContent] = useState();
    const [asks, setAsks] = useState([]);
    const [isClick, setIsClick] = useState(false)

    const onSubmit = async() => {
        const body = {
            content
        }

        const askadmininfo = await API.postAskAdmin(body);
        setIsClick(!isClick)
    }

    const onDelete = async(ask_id) => {
        const delteAskInfo = await API.deleteAsk(ask_id);
        setIsClick(!isClick)
    }


    useEffect (() => {
        (async () => {
            const id = cookie.getCookie('id')
            const type = cookie.getCookie('userType')
    
            const getAdminHistory = 
                params === "counselor" ?
                await API.getAskForCounselor(id) :
                await API.getAskForUser(id);
            
            setAsks(getAdminHistory.data);
        })();
    }, [isClick])


    return(
        <AskAdminPresenter 
        onSubmit = {onSubmit}
        onDelete = {onDelete}
        setContent = {setContent} 
        asks = {asks} 


        />
    )
}

export default AskAdminContainer;