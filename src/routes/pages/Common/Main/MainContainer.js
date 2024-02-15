import React, { useEffect, useState } from "react";
import { MainPresenter } from "./MainPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from "../../../../cookie";

const MainContainer = ({
  setCookies
}) => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    isError: false,
    errorMsg: '',
  });
  const [counselors, setCounselors] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [isSignIn, setIsSignIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClick, setIsClick] = useState(false);

  // /**
  //  * 모달 아이템
  //  */
  // const [modalItems, setModalItems] = useState([
  //   {
  //     text: '',
  //     value: '',
  //   },
  // ]);

  useEffect(() => {
    (
      async () => {
        // 로그인 여부 판단
        const userData = cookie.getCookie('id');
        setIsSignIn(userData !== null);

        // 상품 전체 조회
        const result = await API.getCounselorProducts();
        if (result.status === 500) {
          // 에러 발생
          setError({
            isError: true,
            errorMsg: '상품 전체 조회 중 에러가 발생하였습니다.',
          });
          return;
        }

        setCounselors(result.data);

        // 즐겨찾기 조회
        const favoriteResult = await API.getFavorite(userData);
        if (favoriteResult.status === 409) {
          // 즐겨찾기 정보 가져오기 실패
          setError({
            isError: true,
            errorMsg: '즐겨찾기 정보 조회에 실패하였습니다.',
          });
          return;
        }

        if (favoriteResult.status === 500) {
          // 에러 발생
          setError({
            isError: true,
            errorMsg: '즐겨찾기 정보 조회 중 에러가 발생하였습니다.',
          });
          return;
        }

        setFavorites(favoriteResult.data);
      }
    )();
  }, [isClick]);

  /**
   * 즐겨찾기 추가
   */
  const addFavorite = async (counselor_id) => {
    const id = cookie.getCookie('id');
    if (id === null) {
      // 로그인 필요
      setError({
        isError: true,
        errorMsg: '로그인이 필요합니다.',
      });
      return;
    }

    const body = {
      user_id: id,
      counselor_id: counselor_id,
    };

    // 즐겨찾기
    const result = await API.postFavorite(body);
    if (result.status === 401) {
      // 즐겨찾기 추가 이슈
      setError({
        isError: true,
        errorMsg: '즐겨찾기 추가에 실패하였습니다.'
      });
      return;
    }

    if (result.status === 500) {
      // 에러 발생
      setError({
        isError: true,
        errorMsg: '즐겨찾기 중 에러가 발생하였습니다.',
      });
      return;
    }

    setIsClick(!isClick);
  }

  /**
   * 즐겨찾기 취소
   */
  const deleteFavorite = async (counselor_id, favorite_id) => {
    console.log('call deleteFavorite');
    const user_id = cookie.getCookie('id');
    if (user_id === null) {
      // 로그인 필요
      setError({
        isError: true,
        errorMsg: '로그인이 필요합니다.'
      });
      return;
    }

    const body = {
      user_id,
      counselor_id
    };

    const result = await API.deleteFavorite(body);
    if (result.status === 401) {
      // 즐겨찾기 취소 실패
      setError({
        isError: true,
        errorMsg: '즐겨찾기 취소를 실패히였습니다.',
      });
      return;
    }

    if (result.status === 500) {
      // 에러 발생
      setError({
        isError: true,
        errorMsg: '즐겨찾기 취소 중 에러가 발생하였습니다.',
      });
      return;
    }

    setIsClick(!isClick);
  }

  // /**
  //  * 상담 연결 (V1)
  //  */
  // const connectConsultingV1 = (counselor_id) => {
  //   console.log(counselor_id)
  //   __closeModal();
  //   // Consulting V1 이동

  //   navigate('/consultingv1');
  // }

  // /**
  //  * 상담 연결 (V2)
  //  */
  // const connectConsultingV2 = (counselor_id) => {
  //   __closeModal();

  //   // Consulting V2 이동
  //   navigate('/consultingv2');
  // }

  /**
   * 상담사 상세 페이지로 이동
   * @params counselor_id => 상담사 아이디
   * @params product_id => 상품 아이디
   */
  const moveCounselorDetail = (counselor_id, production_price) => {
    navigate(`/counselor/${counselor_id}`, { state: { production_price } });
  }

  // /* ======================= */
  // /*          모달           */
  // /* ======================= */
  // // 모달 닫기
  // const __closeModal = () => {
  //   setIsModalOpen(false);
  // }

  // /**
  //      * 모달 버튼
  //      */
  // const modalButtons = [
  //   {
  //     text: '상담 V1 연결',
  //     onClick: connectConsultingV1,
  //   },
  //   {
  //     text: '상담 V2 연결',
  //     onClick: connectConsultingV2,
  //   },
  // ];

  // /**
  //  * 모달 오픈
  //  */
  // const modalOpen = (counselor) => {
  //   setIsModalOpen(true);
  //   setModalItems([
  //     {
  //       text: '예명',
  //       value: counselor['counselor.nickname'],
  //     },
  //     {
  //       text: '가격',
  //       value: counselor.price,
  //     },
  //   ])
  // }

  // /**
  //  * 모달 확인 버튼 
  // */
  // const handleOk = () => {
  //   __closeModal();
  // }

  // /**
  //  * 모달 취소 버튼 
  // */
  // const handleCancel = () => {
  //   __closeModal();
  // }

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
    <MainPresenter
      isSignIn={isSignIn}

      counselors={counselors}
      moveCounselorDetail={moveCounselorDetail}

      favorites={favorites}
      addFavorite={addFavorite}
      deleteFavorite={deleteFavorite}

      // isModalOpen={isModalOpen}
      // modalOpen={modalOpen}
      // handleOk={handleOk}
      // handleCancel={handleCancel}
      // modalItems={modalItems}
      // modalButtons={modalButtons}

      error={error}
      checkError={checkError}
    />
  )
}

export default MainContainer;