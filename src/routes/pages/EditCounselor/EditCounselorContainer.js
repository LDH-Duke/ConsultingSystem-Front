import React, { useState, useEffect } from "react";
import { Form, Input, Button } from 'antd';
import { EditCounselorPresenter } from "./EditCounselorPresenter";
import cookie from "../../../cookie";
import API from "../../../api/API";

const EditCounselorContainer = () => {
    
    const [isinfo, setIsinfo] = useState(true);
    const [notice, setNotice] = useState();

    const changeStatus = (e) => {
        setIsinfo(e);
    };

    const onSubmit = async() => {
        const counselor_id = cookie.getCookie('id')

        const body = {
            notice,
        }

        const updateconselorinfo = await API.putCounselorProfile(counselor_id,body);
        console.log(updateconselorinfo)
        console.log(notice)
    }

    return(
        <EditCounselorPresenter isinfo = {isinfo} changeStatus = {changeStatus} setNotice = {setNotice} onSubmit = {onSubmit} />
    )
}

export default EditCounselorContainer;