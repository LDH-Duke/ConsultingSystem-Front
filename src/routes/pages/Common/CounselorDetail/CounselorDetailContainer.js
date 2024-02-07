import React, { useEffect, useState } from "react";
import { CounselorDetailPresenter } from "./CounselorDetailPresenter";
import API from "../../../../api/API";
import { useNavigate, useParams } from "react-router-dom";

const CounselorDetailContainer = ({
  setCookies
}) => {
  const navigate = useNavigate();
  const { counselor_id } = useParams();

  // 상담사
  const [counselor, setCounselor] = useState({});

  // 후기
  const [reviews, setReviews] = useState([]);

  // 서비스공지
  const [notice, setNotice] = useState([]);

  // 서비스소개
  const [introduce, setIntroduce] = useState('');



  useEffect(() => {
    (async () => {

      /**
       * 상담사 단일 정보 조회
       */
      const counselorData = await API.getCounselor(counselor_id);

      if (counselorData === null) {
        // 정보 불러올 수 없다는 알림
        return;
      }

      setCounselor(counselorData.data);

      /**
       * 상담사 단일 후기
       */
      const reviewsData = await API.getReview(counselor_id);
      setReviews(reviewsData.data);

    })();
  }, [])

  const goBack = () => {
    navigate(-1);
  }

  return (
    <CounselorDetailPresenter
      counselor={counselor}
      counselor_id={counselor_id}
      reviews={reviews}
      goBack={goBack}
    />
  )
}

export default CounselorDetailContainer;