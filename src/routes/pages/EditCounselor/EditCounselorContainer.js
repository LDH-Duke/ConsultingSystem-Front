import React, { useState, useEffect } from "react";
import { Form, Input, Button } from 'antd';
import { EditCounselorPresenter } from "./EditCounselorPresenter";
import cookie from "../../../cookie";
import API from "../../../api/API";

const EditCounselorContainer = () => {
    
    const [isinfo, setIsinfo] = useState(true);

    const changeStatus = (e) => {
        setIsinfo(e);
    };

    const onSubmit = async() => {
        const updateconselorinfo = await API.putCounselorProfile;
    }

    return(
        <EditCounselorPresenter isinfo = {isinfo} changeStatus = {changeStatus}/>
    )
}

export default EditCounselorContainer;