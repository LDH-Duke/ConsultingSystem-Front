import React, { useEffect, useState } from "react";
import { ProfilePresenter } from "./ProfilePresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from '../../../../cookie';

const ProfileContainer = ({
  setCookies
}) => {
  const [userInfo, setUserInfo] = useState({});
  const [modifyInfo, setModifyInfo] = useState({
    email: '',
    pw:'',
    name: '',
    phone: '',
  })
  
  useEffect(() => {
    (
      async() => {
        // 유저 정보 가져오는 API 연결
        const id = cookie.getCookie('id');
        if (id === null) {
          // 로그인 필요
        }

        const result = await API.getUser(id);

        if (result.status === 404) {
          // 회원 정보 없음

          return;
        }

        setUserInfo(result.data);
      }
    )();
  }, []);

  const onModify = () => {
    // 수정하는 API 연결
    
  }

  return (
    <ProfilePresenter
      userInfo={userInfo}
      onModify={onModify}
    />
  )
}

export default ProfileContainer;