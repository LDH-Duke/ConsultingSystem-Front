import React, { useEffect, useState } from "react";
import { MainPresenter } from "./MainPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from "../../../../cookie";

const MainContainer = ({
  setCookies
}) => {
  const navigate = useNavigate();

  const [counselors, setCounselors] = useState([]);
  const [isSignIn, setIsSignIn] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectCounselor, setSelectCounselor] = useState({});

  useEffect(() => {
    (
      async() => {
        const result = await API.getCounselorProducts();

        if (result.status === 409) {
          // 상담사 정보 가져오기 실패
          return;
        }

        setCounselors(result.data);

        const userData = cookie.getCookie('id');
        setIsSignIn(userData !== null);
      }
    )();
  }, []);

  /**
   * 좋아요 추가
   */
  const addFavorite = async (counselor_id) => {
    const id = cookie.getCookie('id');

    if (id === null) {
      // 로그인 필요

      return;
    }

    const body = {
      user_id: id,
      counselor_id: counselor_id,
    };

    const result = await API.postFavorite(body);

    if (result.status === 401) {
      // 좋아요 추가 이슈

      return;
    }

    
  }

  const __closeModal = () => {
    setIsModalOpen(false);
    setSelectCounselor({});
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


  /**
   * 모달 오픈
   */
  const modalOpen = (counselor) => {
    setIsModalOpen(true);
    setSelectCounselor(counselor);
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


  return (
    <MainPresenter 
      isSignIn={isSignIn}

      selectCounselor={selectCounselor}
      counselors={counselors}
      addFavorite={addFavorite}

      isModalOpen={isModalOpen}
      modalOpen={modalOpen}
      handleOk={handleOk}
      handleCancel={handleCancel}

      connectConsultingV1={connectConsultingV1}
      connectConsultingV2={connectConsultingV2}
    />
  )
}

export default MainContainer;