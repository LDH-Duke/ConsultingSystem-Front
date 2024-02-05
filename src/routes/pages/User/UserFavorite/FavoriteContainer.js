import React, { useEffect, useState } from "react";
import { FavoritePresenter } from "./FavoritePresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from '../../../../cookie';

const FavoriteContainer = ({
  setCookies
}) => {
  
  const [favoriteList, setFavoriteList] = useState([
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
    },
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
    },
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
    },
  ]);

  const deleteFavorite = async (counselor_id) => {
    console.log('call deleteFavorite');
    const user_id = cookie.getCookie('id');

    const body = {
      user_id,
      counselor_id
    };

    const result = await API.deleteFavorite(body);
  }

  return (
    <FavoritePresenter
      favoriteList={favoriteList}

      deleteFavorite={deleteFavorite}
    />
  )
}

export default FavoriteContainer;