import React, { useEffect, useState } from "react";
import { MyMenuPresenter } from "./MyMenuPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from '../../../../cookie';

const MyMenuContainer = ({
  setCookies
}) => {
  const myMenuItems = useState([
    {
      title: '즐겨찾기',
      path: '/user/favorite',
    },
    {
      title: '구매내역\n(작동X)',
      path: '/',
    },
    {
      title: '나의예약\n(작동X)',
      path: '/',
    },
    {
      title: '코인충전\n사용내역\n(작동X)',
      path: '/',
    },
    {
      title: '결제내역\n(작동X)',
      path: '/',
    },
    {
      title: '알림내역\n(작동X)',
      path: '/',
    },
    {
      title: '1:1문의',
      path: '/askadmin/user',
    },
    {
      title: '후기 작성',
      path: '/user/review/write',
    },
    {
      title: '작성 후기 조회',
      path: '/user/review',
    },
  ]);

  const [error, setError] = useState({
    isError: false,
    errorMsg: '',
  });
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    (
      async () => {
        const id = cookie.getCookie('id');

        if (id === null) {
          //로그인 필요
          setError({
            isError: true,
            errorMsg: '로그인이 필요합니다.',
          });
          return;
        }

        const result = await API.getUser(id);

        if (result.status === 409) {
          // 정보 없음
          setError({
            isError: true,
            errorMsg: '회원 정보 조회에 실패하였습니다.',
          });
          return;
        } 
        
        if (result.status === 500) {
          // 에러 발생
          setError({
            isError: true,
            errorMsg: '회원 정보 조회 중 에러가 발생하였습니다.',
          });
          return;
        }

        setUserInfo(result.data);
      }
    )();
  }, [])

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
    <MyMenuPresenter
      userInfo={userInfo}
      myMenuItems={myMenuItems}
      
      error={error}
      checkError={checkError}
    />
  )
}

export default MyMenuContainer;