import React, { useEffect, useState } from "react";
import { UserListPresenter } from "./UserListPresenter";
import { useNavigate } from "react-router-dom";
import { API } from '../../../../api';

const UserListContainer = () => {
  const [users, setUsers] = useState([
    {
      id: 'test1',
      name: 'test_user1',
      total_coin: 100,
      tel: '01011111111',
    },
    {
      id: 'test2',
      name: 'test_user2',
      total_coin: 200,
      tel: '01011112222',
    },
    {
      id: 'test3',
      name: 'test_user3',
      total_coin: 300,
      tel: '01011113333',
    },
    {
      id: 'test4',
      name: 'test_user4',
      total_coin: 400,
      tel: '01011114444',
    },
    {
      id: 'test5',
      name: 'test_user5',
      total_coin: 500,
      tel: '01011115555',
    },
  ]);

  useEffect(() => {
    (async() => {
      const {data} = await API.getusers();

      console.log(data);

      // TODO: API연결 필요
      setUsers(data);
    })();
  }, []);

    return(
        <UserListPresenter
         users={users}
      />
    )
}

export default UserListContainer;