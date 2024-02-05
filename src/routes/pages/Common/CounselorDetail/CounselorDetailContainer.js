import React, { useEffect, useState } from "react";
import { CounselorDetailPresenter } from "./CounselorDetailPresenter";
import API from "../../../../api/API";
import { useNavigate, useParams } from "react-router-dom";

const CounselorDetailContainer = ({
  setCookies
}) => {
  const {counselor_id} = useParams();
  const [counselor, setCounselor] = useState({
    id: 1,
    name: 'test',
    nickname: 'test',
    email: 'test@test.com',
    phone: '01012345678',
    rating: '브론즈',
    total_coin: 10000,
    status: '대기',
    img: 'ㅁㄴㅇ',
    intro: 'ㅁㄴㅇ',
    notice: 'ㅁㄴㅇ',
    detail: 'ㅁㄴㅇ',
    createdAt: 'ㅁㄴㅇ',
    updatedAt: 'ㅁㄴㅇ',
    count: 15,
    is_accept: true
  });

  useEffect(() => {
    (async() => {
      const result = await API.getCounselor(counselor_id);

      if (result === null) {
        // 정보 불러올 수 없다는 알림
        return;
      }

      setCounselor(result.data);
    })();
  })

  return (
    <CounselorDetailPresenter 
      counselor={counselor}
      counselor_id={counselor_id}
    />
  )
}

export default CounselorDetailContainer;