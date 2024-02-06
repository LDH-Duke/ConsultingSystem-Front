import React, { useEffect, useState } from "react";
import { MainPresenter } from "./MainPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from "../../../../cookie";

const MainContainer = ({
  setCookies
}) => {
  const [counselors, setCounselors] = useState([]);
  const [isSignIn, setIsSignIn] = useState(false);

  useEffect(() => {
    (
      async() => {
        const result = await API.getCounselorProducts();

        if (result.status === 409) {
          // 상담사 정보 가져오기 실패
          return;
        }

        setCounselors(result.data);

        const userData = cookie.getCookie('id');
        setIsSignIn(userData !== null);
      }
    )();
  }, []);

  const addFavorite = async (counselor_id) => {
    const id = cookie.getCookie('id');

    if (id === null) {
      // 로그인 필요

      return;
    }

    const body = {
      user_id: id,
      counselor_id: counselor_id,
    };

    const result = await API.postFavorite(body);

    if (result.status === 401) {
      // 좋아요 추가 이슈

      return;
    }

    
  }

  return (
    <MainPresenter 
      isSignIn={isSignIn}

      counselors={counselors}
      addFavorite={addFavorite}
    />
  )
}

export default MainContainer;