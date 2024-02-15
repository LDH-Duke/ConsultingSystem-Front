import React, { useEffect, useState } from "react";
import { UpdateAskAdminPresenter } from "./UpdateAskAdminPresenter";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../../../api/API";

const UpdateAskAdminContainer = () => {
    const navigate = useNavigate();
    const { ask_id } = useParams();

    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [ask, setAsk] = useState('');

    const onUpdate = async () => {
        const askno = ask_id;

        const body = {
            content: ask
        }

        const putAskInfo = await API.putAsks(askno, body);
        if (putAskInfo.status === 404) {
            // 문의 수정 실패
            setError({
                isError: true,
                errorMsg: '문의 수정에 실패하였습니다.'
            });
            return;
        }

        if (putAskInfo.status === 500) {
            // 에러 발생
            setError({
                isError: true,
                errorMsg: '문의 수정 중 에러가 발생하였습니다.'
            });
            return;
        }

        navigate(-1);
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


    return (
        <UpdateAskAdminPresenter
            setAsk={setAsk}
            onUpdate={onUpdate}

            error={error}
            checkError={checkError}
        />
    )
}

export default UpdateAskAdminContainer;