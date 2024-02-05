import React, { useEffect, useState } from "react";
import { SitemapPresenter } from "./SitemapPresenter";
import API from "../../../../api/API";
import { useNavigate, useParams } from "react-router-dom";

const SitemapContainer = ({
  setCookies
}) => {
  const items = [
    {
      title: '전화상담',
      subTitle: '고민은 후련하게',
      path: '/',
    },
    {
      title: '서비스상품',
      subTitle: '서비스상품으로 이동',
      path: '/',
    },
    {
      title: '최근 3개월',
      subTitle: '최근 3개월간 전화상담',
      path: '/',
    },
    {
      title: '이벤트',
      subTitle: '이벤트로 이동',
      path: '/',
    },
    {
      title: '후기',
      subTitle: '후기로 이동',
      path: '/',
    },
    {
      title: '콘텐츠',
      subTitle: '콘텐츠로 이동',
      path: '/',
    },
  ];

  return (
    <SitemapPresenter items={items}/>
  )
}

export default SitemapContainer;