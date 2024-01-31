import React, { useState, useEffect } from 'react'
import { FavoritePresenter } from './FavoritePresenter'
import API from '../../../api/API';
import cookie from '../../../cookie';

const FavoriteContainer = ({
  navigate
}) => {


  // 수정 해야함
  const [favorite, setFavorite] = useState(true)



  /**
   * 회원 개인 즐겨찾기 (단일조회)
   */
  useEffect(() => {
    (async () => {

      const userId = cookie.getCookie('id');

      if (!userId) {
        navigate('/sign');
        return;
      }

      const data = {
        user_id: userId
      };

      const result = await API.getFavorite(data);
      console.log(result)
    })();
  }, [])


  /**
    * 즐겨찾기 추가
    */
  const addFavorite = async (counselorId) => {

    setFavorite(true);

    const userId = cookie.getCookie('id');
    const data = {
      user_id: userId,
      counselor_id: counselorId
    };

    const result = await API.postFavorite(data);
  }



  /**
   * 즐겨찾기 취소
   */
  const deleteFavorite = async (counselorId) => {

    setFavorite(false);

    const userId = cookie.getCookie('id');

    const data = {
      user_id: userId,
      counselor_id: counselorId
    };

    const result = await API.deleteFavorite(data);
  }



  /**
   * 임시 데이터
   */
  const [counselors, setCounselors] = useState([
    {
      counselor_id: 1,
      name: '허관',
      category: '진로',
      price: 1000,
      rank: '브론즈',
      status: false,
      introduce: '가'
    },
    {
      counselor_id: 2,
      name: '김권후',
      category: '대선',
      price: 2000,
      rank: '실버',
      status: true,
      introduce: '나'
    },
    {
      counselor_id: 3,
      name: '김건우',
      category: '화이트',
      price: 3000,
      rank: '골드',
      status: false,
      introduce: '다'
    }
  ]);




  return (
    <FavoritePresenter
      counselors={counselors}
      addFavorite={addFavorite}
      deleteFavorite={deleteFavorite}
      favorite={favorite}
    />
  )
}

export default FavoriteContainer