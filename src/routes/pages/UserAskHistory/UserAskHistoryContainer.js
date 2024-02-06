import React, { useEffect, useState } from "react";
import { UserAskHistoryPresenter } from "./UserAskHistoryPresenter";
import { API } from "../../../api";
import cookie from "../../../cookie";

const UserAskHistoryContainer = ({
    navigate
}) => {

    const [asks, setAsks] = useState([]);

    useEffect( () => {
        (async () => {
            
            const user_id = cookie.getCookie('id')

            if(!user_id) {
                alert('로그인이 필요한 페이지입니다.')
                navigate('/sign')
            }

            const getuseraskhistoryinfo = await API.getAskForUser(user_id);
            setAsks(getuseraskhistoryinfo.data)

        })();
    })
    return(
        <UserAskHistoryPresenter 
            asks = {asks}
        />
    )
}

export default UserAskHistoryContainer;