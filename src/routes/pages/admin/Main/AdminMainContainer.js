import React, { useEffect, useState } from "react";
import { AdminMainPresenter } from "./AdminMainPresenter";
import CounselorListContainer from '../CounselorList';
import UserListContainer from '../UserList';
import PaymentHistoryListContainer from '../PaymentHistoryList';
import AskListContainer from "../AskList/AskListContainer";
import { useNavigate } from "react-router-dom";

const AdminMainContainer = () => {
  const items = [
    {
      key: '1',
      label: '상담사 신청 목록',
      children:
       <div>
          <CounselorListContainer/>
       </div>
    },
    {
      key: '2',
      label: '사용자 관리',
      children:
       <div>
          <UserListContainer />
       </div>
    },
    {
      key: '3',
      label: '결제내역 관리',
      children:
       <div>
          <PaymentHistoryListContainer />
       </div>
    },
    {
      key: '4',
      label: '매출 관리',
      children:
       <div>
          매출 관리
       </div>
    },
    {
      key: '5',
      label: '정산 관리',
      children:
       <div>
          정산 관리
       </div>
    },
    {
      key: '6',
      label: '문의 관리',
      children:
       <div>
          <AskListContainer />
       </div>
    },
    {
      key: '7',
      label: '통합 관리',
      children:
       <div>
          통합 관리
       </div>
    },
  ]

    return(
        <AdminMainPresenter items={items}/>
    )
}

export default AdminMainContainer;