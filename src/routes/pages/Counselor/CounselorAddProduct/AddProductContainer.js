import React, { useEffect, useState } from "react";
import { AddProductPresenter } from "./AddProductPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";
import cookie from '../../../../cookie';

const AddProductContainer = ({
  setCookies
}) => {
  const navigate = useNavigate();

  const [error, setError] = useState({
    isError: false,
    errorMsg: '',
  });
  const [productInfo, setProductInfo] = useState({
    name: '',
    price: '',
    explain: '',
  });

  const addProduct = async () => {
    // 상품 등록
    const counselor_id = cookie.getCookie('id');

    if (counselor_id === null) {
      // 로그인 필요
      setError({
        isError: true,
        errorMsg: '로그인이 필요합니다.',
    });
      return;
    }

    const result = await API.postProduct(counselor_id, productInfo);

    if (result.status === 500) {
      // 오류 발생
          setError({
            isError: true,
            errorMsg: '상품 등록 중 에러가 발생하였습니다.',
          });
      return;
    }

    // FIXME: 경로 수정 요망
    navigate('/');
  }

  return (
    <AddProductPresenter 
      productInfo={productInfo}
      setProductInfo={setProductInfo}

      addProduct={addProduct}
    />
  )
}

export default AddProductContainer;