import React, { useEffect, useState } from "react";
import { MyMenuPresenter } from "./MyMenuPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from '../../../../cookie';

const MyMenuContainer = ({
  setCookies
}) => {
  const myMenuItems = [
    {
      title: '상담내역',
      path: '/',
    },
    {
      title: '상품\n구매내역',
      path: '/',
    },
    {
      title: '나의예약',
      path: '/',
    },
    {
      title: '코인충전\n사용내역',
      path: '/',
    },
    {
      title: '결제내역',
      path: '/',
    },
    {
      title: '나의 후기',
      path: '/',
    },
    {
      title: '나의 1:1문의',
      path: '/',
    },
    {
      title: '코인 자동충전',
      path: '/',
    },
    {
      title: '알림내역',
      path: '/',
    },
  ]
  
  return (
    <MyMenuPresenter myMenuItems={myMenuItems}/>
  )
}

export default MyMenuContainer;