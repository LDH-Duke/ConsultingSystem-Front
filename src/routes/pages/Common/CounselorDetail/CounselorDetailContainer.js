import React, { useEffect, useState } from "react";
import { CounselorDetailPresenter } from "./CounselorDetailPresenter";
import API from "../../../../api/API";
import { useNavigate, useParams, useLocation } from "react-router-dom";

const CounselorDetailContainer = ({
  setCookies
}) => {
  const navigate = useNavigate();
  const { counselor_id } = useParams();
  const { state: { production_price } } = useLocation();

  const [error, setError] = useState({
    isError: false,
    errorMsg: '',
  });
  // 상담사
  const [counselor, setCounselor] = useState({});

  // 후기
  const [reviews, setReviews] = useState([]);

  // 서비스공지
  const [notice, setNotice] = useState([]);

  // 서비스소개
  const [introduce, setIntroduce] = useState('');

  // 모달
  const [isModalOpen, setIsModalOpen] = useState(false);
  /**
     * 모달 아이템
     */
  const [modalItems, setModalItems] = useState([
    {
      text: '',
      value: '',
    },
  ]);

  useEffect(() => {
    (
      async () => {
        /**
         * 상담사 단일 정보 조회
         */
        const counselorData = await API.getCounselor(counselor_id);

        if (counselorData.status === 404) {
          // 상담사 정보 조회 실패
          setError({
            isError: true,
            errorMsg: '상담사 정보 조회에 실패하였습니다.',
          });
          return;
        }

        if (counselorData.status === 500) {
          // 에러 발생
          setError({
            isError: true,
            errorMsg: '상담사 정보 조회 중 에러가 발생하였습니다.',
          });
          return;
        }

        setCounselor(counselorData.data);

        // 상품 정보 가져오기
        // const productionData = await API.getProduction(production_id);

        setModalItems([
          {
            text: '예명',
            value: counselorData.data.nickname,
          },
          {
            text: '가격',
            value: production_price,
          },
        ]);

        /**
         * 상담사 단일 후기
         */
        const reviewsData = await API.getReview(counselor_id);

        if (reviewsData.status === 409) {
          // 후기 조회 실패
          setError({
            isError: true,
            errorMsg: '상담사 후기 조회에 실패하였습니다.',
          });
          return;
        }

        if (reviewsData.status === 500) {
          // 에러 발생
          setError({
            isError: true,
            errorMsg: '상담사 후기 조회 중 에러가 발생하였습니다.',
          });
          return;
        }

        setReviews(reviewsData.data);
      }
    )();
  }, [])

  const goBack = () => {
    navigate(-1);
  }

  /**
   * 상담 연결 (V1)
   */
  const connectConsultingV1 = (counselor_id) => {
    __closeModal();

    // Consulting V1 이동
    navigate('/consultingv1');
  }

  /**
   * 상담 연결 (V2)
   */
  const connectConsultingV2 = (counselor_id) => {
    __closeModal();

    // Consulting V2 이동
    navigate('/consultingv2');
  }


  /* ======================= */
  /*          모달           */
  /* ======================= */
  // 모달 닫기
  const __closeModal = () => {
    setIsModalOpen(false);
  }

  /**
    * 모달 버튼
  */
  const modalButtons = [
    {
      text: '상담 V1 연결',
      onClick: connectConsultingV1,
    },
    {
      text: '상담 V2 연결',
      onClick: connectConsultingV2,
    },
  ];

  /**
   * 모달 오픈
   */
  const modalOpen = () => {
    setIsModalOpen(true);
  }

  /**
   * 모달 확인 버튼 
  */
  const handleOk = () => {
    __closeModal();
  }

  /**
   * 모달 취소 버튼 
  */
  const handleCancel = () => {
    __closeModal();
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
    <CounselorDetailPresenter
      counselor={counselor}
      counselor_id={counselor_id}
      reviews={reviews}
      goBack={goBack}

      isModalOpen={isModalOpen}
      modalOpen={modalOpen}
      handleCancel={handleCancel}
      modalItems={modalItems}
      modalButtons={modalButtons}
    />
  )
}

export default CounselorDetailContainer;