import React, { useEffect, useState } from "react";
import { ManageUserPresenter } from "./ManageUserPresenter";
import API from '../../../../../../api/API';

const ManageUserContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (
            async () => {
                const { data } = await API.getUsers();

                console.log(data);

                // TODO: API연결 필요
                setUsers(data);
            }
        )();
    }, []);

    return (
        <ManageUserPresenter
            users={users}
        />
    )
}

export default ManageUserContainer;