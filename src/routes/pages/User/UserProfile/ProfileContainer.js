import React, { useEffect, useState } from "react";
import { ProfilePresenter } from "./ProfilePresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from '../../../../cookie';

const ProfileContainer = ({
  setCookies
}) => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});
  
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


  /**
   * 회원 정보 수정
   */
  const onModify = async () => {
    // 수정하는 API 연결
    const id = cookie.getCookie('id');

    if (id === null) {
      // 로그인 필요

      return;
    }

    const result = await API.putUser(id, userInfo);

    if (result === false) {
      // 수정 실패
      return;
    }

    // 수정 성공
    navigate('/user/mymenu');
  }


  return (
    <ProfilePresenter
      userInfo={userInfo}
      setUserInfo={setUserInfo}

      onModify={onModify}
    />
  )
}

export default ProfileContainer;