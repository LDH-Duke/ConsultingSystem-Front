import React, { useState } from "react";
import { UserAskPresenter } from "./UserAskPresenter";
import API from "../../../../api/API";
import { useParams } from "react-router-dom";

const UserAskContainer = () => {
    
    const {counselor_id} = useParams();

    const [content, setContent] = useState();

    const onSubmit = async() => {
        const body = {
            content
        };
        const askCounselorInfo = await API.postQuestionToCounselor(counselor_id, body);
    }

    return(
        <UserAskPresenter 
        setContent={setContent} 
        
        onSubmit={onSubmit}/>
    )
}

export default UserAskContainer;