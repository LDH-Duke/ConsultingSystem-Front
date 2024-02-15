import React, { useEffect, useState } from "react";
import { SignUpPresenter } from "./SignUpPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";

const SignUpContainer = ({
  setCookies
}) => {
  // 이메일 정규식
  const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const navigate = useNavigate();

  const [error, setError] = useState({
    isError: false,
    errorMsg: '',
  });
  const [isCheckEmail, setIsCheckEmail] = useState(false);
  const [isCheckPw, setIsCheckPw] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isDoubleCheck, setIsDoubleCheck] = useState(false);

  const [canSignup, setCanSignup] = useState(false);

  const [userInfo, setUserInfo] = useState({
    email: '',
    pw: '',
    pw_check: '',
    name: '',
    phone: '',
  });


  useEffect(() => {
    setCanSignup(isCheckEmail && isCheckPw && isDoubleCheck && userInfo.name.length && isPhone);
  }, [isCheckEmail, isCheckPw, isDoubleCheck, isPhone])

  /**
   * 이메일 형식 확인 함수
   */
  const checkEmail = () => {
    if (emailRegex.test(userInfo.email) === false) {
      // 이메일 형식 맞지 않음
      setIsCheckEmail(false);
      return;
    }

    setIsCheckEmail(true);
  }

  /**
   * 비밀번호 확인 함수
   */
  const checkPw = () => {
    if (userInfo.pw !== userInfo.pw_check) {
      setIsCheckPw(false);
      return;
    }

    setIsCheckPw(true);
  }

  /**
   * 중복확인 함수
   */
  const doubleCheck = async () => {
    const body = {
      email: userInfo.email,
      phone: userInfo.phone,
    }

    const result = await API.postUserDoublecheck(body);

    if (result.status === 409) {
      // 중복확인 실패
      // 실패 알림
      setError({
        isError: true,
        errorMsg: '중복확인에 실패하였습니다.',
      });
      return;
    } 
    
    if (result.status === 500) {
      // 에러 발생
      setError({
        isError: true,
        errorMsg: '중복확인 중 에러가 발생하였습니다.',
      });
      return;
    }

    // 중복확인 성공
    setIsDoubleCheck(true);
  };

  /**
   * 전화번호 확인 함수
   */
  const checkPhone = () => {
    if (userInfo.phone.length !== 11) {
      setIsPhone(false);
      return;
    }

    setIsPhone(true);
  }


  /**
   * 회원가입 함수
   */
  const SignUp = async () => {
    const body = {
      email: userInfo.email,
      pw: userInfo.pw,
      name: userInfo.name,
      phone: userInfo.phone,
    };

    // const result = isUser ? await API.postSignUp(body) : await API.postCounselorSignUp(body);
    const result = await API.postSignup(body);

    if (result.status === 401) {
      // 회원가입 실패
      setError({
        isError: true,
        errorMsg: '회원가입에 실패하였습니다.',
      });
      return;
    } 
    
    if (result.status === 500) {
      // 에러 발생
      setError({
        isError: true,
        errorMsg: '회원가입 중 에러가 발생하였습니다.',
      });
      return;
    }

    navigate('/signin');
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
    <SignUpPresenter
      isCheckEmail={isCheckEmail}
      isCheckPw={isCheckPw}

      canSignup={canSignup}

      setUserInfo={setUserInfo}

      checkEmail={checkEmail}
      checkPw={checkPw}
      checkPhone={checkPhone}

      doubleCheck={doubleCheck}
      SignUp={SignUp}
    />
  )
}

export default SignUpContainer;