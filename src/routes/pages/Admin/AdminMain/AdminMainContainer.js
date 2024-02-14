import React, { useEffect, useState } from "react";
import { AdminMainPresenter } from "./AdminMainPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import { RequestCounselor, ManageUser, ManagePayment, ManageAsk } from "./components";

const AdminMainContainer = ({

}) => {
  const [link, setLink] = useState('');
  const [component, setComponent] = useState(null);
  const [components] = useState([
    <RequestCounselor />,
    <ManageUser />,
    <ManagePayment />,
    <div>매출 관리</div>,
    <div>정산 관리</div>,
    <ManageAsk />,
    <div>통합 관리</div>,
  ])

  const setContent = (idx) => {
    setComponent(components[idx]);
  }

  const tabs = [
    {
      title: '상담사 관리',
      link: 'request_conuselor_list',
    },
    {
      title: '사용자 관리',
      link: 'manage_users',
    },
    {
      title: '결제내역 관리',
      link: 'manage_payments',
    },
    {
      title: '매출 관리',
      link: 'manage_sales',
    },
    {
      title: '정산 관리',
      link: 'manage_adjustment',
    },
    {
      title: '문의 관리',
      link: 'manage_ask',
    },
    {
      title: '통합 관리',
      link: 'manage_all',
    },
  ]

  return (
    <AdminMainPresenter
      tabs={tabs}
      setContent={setContent}
      component={component}
    />
  )
}

export default AdminMainContainer;