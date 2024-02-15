import React, { useState, useEffect } from 'react'
import { SearchResultPresenter } from './SearchResultPresenter'
import { useNavigate, useSearchParams } from 'react-router-dom'
import API from "../../../../api/API";
import cookie from '../../../../cookie';

const SearchResultContainer = () => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    isError: false,
    errorMsg: '',
  });
  const [searchParams, setSearchParams] = useSearchParams();

  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // List 관련 state
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
    (async () => {
      // 로그인 판단 여부
      const userData = cookie.getCookie('id');
      setIsSignIn(userData !== null);

      const searchKeyword = searchParams.get('keyword');
      setKeyword(searchKeyword);

      const result = await API.getSearch(searchKeyword);
      if (result.status === 409) {
        // 검색 실패
        setError({
          isError: true,
          errorMsg: '검색에 실패하였습니다.'
        });
        return;
      }

      if (result.status === 500) {
        // 에러 발생
        setError({
          isError: true,
          errorMsg: '검색 중 에러가 발생하였습니다.'
        });
        return;
      }

      setSearchResults(result.data);


      // 좋아요 전체 조회
      const favoriteResult = await API.getFavorite(userData);
      if (favoriteResult.status === 409) {
        // 좋아요 정보 가져오기 실패
        setError({
          isError: true,
          errorMsg: '좋아요 조회에 실패하였습니다.'
        });
        return;
      }

      if (favoriteResult.status === 500) {
        // 에러 발생
        setError({
          isError: true,
          errorMsg: '좋아요 조회 중 에러가 발생하였습니다.'
        });
        return;
      }

      setFavorites(favoriteResult.data);
    })();
  }, [isClick])

  const onKeyEnter = (e) => {
    if (e.Key === 'Enter') {
      Search();
    }
  }

  const Search = () => {
    const searchKeyword = keyword.trim();
    setIsClick(!isClick);
    navigate(`/search/result?keyword=${searchKeyword}`);
  }


  /* ==================== */
  /*   리스트 관련 함수   */
  /* ==================== */
  /**
   * 좋아요 추가
  */
  const addFavorite = async (counselor_id) => {
    const id = cookie.getCookie('id');
    if (id === null) {
      // 로그인 필요
      setError({
        isError: true,

      })
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

    setIsClick(!isClick);
  }

  /**
   * 좋아요 취소
  */
  const deleteFavorite = async (counselor_id, favorite_id) => {
    console.log('call deleteFavorite');
    const user_id = cookie.getCookie('id');

    const body = {
      user_id,
      counselor_id
    };

    const result = await API.deleteFavorite(body);

    if (result.status === 401) {
      // 좋아요 취소 실패

      return;
    }

    setIsClick(!isClick);
  }

  // /**
  //  * 상담 연결 (V1)
  //  */
  // const connectConsultingV1 = (counselor_id) => {
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
    <SearchResultPresenter
      isSignIn={isSignIn}

      keyword={keyword}
      setKeyword={setKeyword}
      Search={Search}
      onKeyEnter={onKeyEnter}

      searchResults={searchResults}
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

export default SearchResultContainer