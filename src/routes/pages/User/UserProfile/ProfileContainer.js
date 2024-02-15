import React, { useEffect, useState } from "react";
import { ProfilePresenter } from "./ProfilePresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from '../../../../cookie';

const ProfileContainer = ({
  setCookies
}) => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    isError: false,
    errorMsg: '',
  });
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    (
      async () => {
        // 유저 정보 가져오는 API 연결
        const id = cookie.getCookie('id');
        if (id === null) {
          // 로그인 필요
          setError({
            isError: true,
            errorMsg: '로그인이 필요합니다.',
          });
          return;
        }

        const result = await API.getUser(id);
        if (result.code === 500) {
          // 서버 연결 안됨
          setError({
            isError: true,
            errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
          });
          return;
        }

        if (result.status === 404) {
          // 회원 정보 없음
          setError({
            isError: true,
            errorMsg: '회원 정보가 존재하지 않습니다.',
          });
          return;
        }

        if (result.status === 500) {
          // 에러 발생
          setError({
            isError: true,
            errorMsg: '회원 정보를 불러오는 중 에러가 발생하였습니다.',
          });
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
      setError({
        isError: true,
        errorMsg: '로그인이 필요합니다.',
      });
      return;
    }

    const result = await API.putUser(id, userInfo);
    if (result.code === 500) {
      // 서버 연결 안됨
      setError({
        isError: true,
        errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
      });
      return;
    }

    if (result.status === 409) {
      // 수정 실패
      setError({
        isError: true,
        errorMsg: '회원 정보 수정에 실패하였습니다.',
      });
      return;
    }

    if (result.status === 500) {
      // 에러 발생
      setError({
        isError: true,
        errorMsg: '회원 정보 수정 중 에러가 발생하였습니다.',
      });
      return;
    }

    // 수정 성공
    navigate('/user/mymenu');
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
    <ProfilePresenter
      userInfo={userInfo}
      setUserInfo={setUserInfo}

      onModify={onModify}

      error={error}
      checkError={checkError}
    />
  )
}

export default ProfileContainer;