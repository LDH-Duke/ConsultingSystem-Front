import React, { useEffect, useState } from "react";
import { FavoritePresenter } from "./FavoritePresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from '../../../../cookie';

const FavoriteContainer = ({
  setCookies
}) => {
  // const [favoriteList, setFavoriteList] = useState([
  //   {
  //     counselor_id: 1,
  //     name: '허관',
  //     category: '진로',
  //     price: 1000,
  //     rank: '브론즈',
  //     status: false,
  //     introduce: '가'
  //   },
  //   {
  //     counselor_id: 2,
  //     name: '김권후',
  //     category: '대선',
  //     price: 2000,
  //     rank: '실버',
  //     status: true,
  //     introduce: '나'
  //   },
  //   {
  //     counselor_id: 3,
  //     name: '김건우',
  //     category: '화이트',
  //     price: 3000,
  //     rank: '골드',
  //     status: false,
  //     introduce: '다'
  //   },
  //   {
  //     counselor_id: 1,
  //     name: '허관',
  //     category: '진로',
  //     price: 1000,
  //     rank: '브론즈',
  //     status: false,
  //     introduce: '가'
  //   },
  //   {
  //     counselor_id: 2,
  //     name: '김권후',
  //     category: '대선',
  //     price: 2000,
  //     rank: '실버',
  //     status: true,
  //     introduce: '나'
  //   },
  //   {
  //     counselor_id: 3,
  //     name: '김건우',
  //     category: '화이트',
  //     price: 3000,
  //     rank: '골드',
  //     status: false,
  //     introduce: '다'
  //   },
  //   {
  //     counselor_id: 1,
  //     name: '허관',
  //     category: '진로',
  //     price: 1000,
  //     rank: '브론즈',
  //     status: false,
  //     introduce: '가'
  //   },
  //   {
  //     counselor_id: 2,
  //     name: '김권후',
  //     category: '대선',
  //     price: 2000,
  //     rank: '실버',
  //     status: true,
  //     introduce: '나'
  //   },
  //   {
  //     counselor_id: 3,
  //     name: '김건우',
  //     category: '화이트',
  //     price: 3000,
  //     rank: '골드',
  //     status: false,
  //     introduce: '다'
  //   },
  // ]);

  const [error, setError] = useState({
    isError: false,
    errorMsg: '',
  });
  const [favoriteList, setFavoriteList] = useState([]);
  const [isClick, setIsClick] = useState(false);

  useEffect(() => {
    (async () => {
      // 쿠키에서 회원 id를 가져옴
      const id = cookie.getCookie('id');
      if (id === null) {
        // 로그인이 되어있지 않다는 알림
        setError({
          isError: true,
          errorMsg: '로그인이 필요합니다.',
        });
        return;
      }

      // API로 즐겨찾기 목록 요청
      const result = await API.getFavorite(id);
      if (result.code === 500) {
        // 서버 연결 안됨
        setError({
          isError: true,
          errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
        });
        return;
      }

      if (result.status === 404) {
        // 즐겨찾기 목록 조회에 실패할 경우
        setError({
          isError: true,
          errorMsg: '즐겨찾기 목록 조회에 실패하였습니다.',
        });
        return;
      }

      if (result.status === 500) {
        // 에러 발생
        setError({
          isError: true,
          errorMsg: '즐겨찾기 목록 조회 중 에러가 발생하였습니다.',
        });
        return;
      }

      setFavoriteList(result.data);
    })();
  }, [isClick]);

  /**
   * 즐겨찾기 취소
   */
  const deleteFavorite = async (counselor_id) => {
    const user_id = cookie.getCookie('id');
    if (user_id === null) {
      // 로그인이 되어있지 않다는 알림
      setError({
        isError: true,
        errorMsg: '로그인이 필요합니다.',
      });
      return;
    }

    const body = {
      user_id,
      counselor_id
    };

    const result = await API.deleteFavorite(body);
    if (result.code === 500) {
      // 서버 연결 안됨
      setError({
        isError: true,
        errorMsg: `서버 연결이 원활하지 않습니다.\n잠시만 기다려주시기 바랍니다.`
      });
      return;
    }

    if (result.status === 401) {
      // 즐겨찾기 취소 실패
      setError({
        isError: true,
        errorMsg: '즐겨찾기 취소에 실패하였습니다.',
      });
      return;
    }

    if (result.status === 500) {
      // 에러 발생
      setError({
        isError: true,
        errorMsg: '즐겨찾기 취소 중 에러가 발생하였습니다.',
      });
      return;
    }

    setIsClick(!isClick);
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
    <FavoritePresenter
      favoriteList={favoriteList}

      deleteFavorite={deleteFavorite}

      error={error}
      checkError={checkError}
    />
  )
}

export default FavoriteContainer;