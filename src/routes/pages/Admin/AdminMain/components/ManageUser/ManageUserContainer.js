import React, { useEffect, useState } from "react";
import { ManageUserPresenter } from "./ManageUserPresenter";
import API from '../../../../../../api/API';

const ManageUserContainer = () => {
    const [error, setError] = useState({
        isError: false,
        errorMsg: '',
    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (
            async () => {
                const data = await API.getUsers();
                if (data.status === 500) {
                    // 에러 발생
                    setError({
                        isError: true,
                        errorMsg: '회원 전체 조회 중 에러가 발생하였습니다.'
                    });
                    return;
                }

                console.log(data);

                setUsers(data.data);
            }
        )();
    }, []);

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
        <ManageUserPresenter
            users={users}

            error={error}
            checkError={checkError}
        />
    )
}

export default ManageUserContainer;