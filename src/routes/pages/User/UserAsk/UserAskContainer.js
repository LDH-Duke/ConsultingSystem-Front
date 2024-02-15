import React, { useState } from "react";
import { UserAskPresenter } from "./UserAskPresenter";
import API from "../../../../api/API";
import { useParams } from "react-router-dom";

const UserAskContainer = () => {
    
    const {counselor_id} = useParams();

    const [content, setContent] = useState();

    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });

    const onSubmit = async() => {
        const body = {
            content
        };
        const askCounselorInfo = await API.postQuestionToCounselor(counselor_id, body);
        if (askCounselorInfo.status === 409) {
            // 문의 등록 실패
            setError({
                isError: true,
                errorMsg: '문의 등록에 실패하였습니다.',
            });
            return;
        }

        if (askCounselorInfo.status === 500) {
            // 에러 발생
            setError({
                isError: true,
                errorMsg: '문의 등록 중 에러가 발생하였습니다.',
            });
            return;
        }
    }

    /**
     * 에러 처리 함수
     */
    const checkError = () => {
        setError({
            isError: false,
            errorMsg: '',
        });
    }

    return(
        <UserAskPresenter 
        setContent={setContent} 
        
        onSubmit={onSubmit}
        
        error = {error}
        checkError = {checkError}
        />
    )
}

export default UserAskContainer;