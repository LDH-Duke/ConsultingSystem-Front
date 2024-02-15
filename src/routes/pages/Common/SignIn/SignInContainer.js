import React, { useEffect, useState } from "react";
import { SignInPresenter } from "./SignInPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";

const SignInContainer = ({
  setCookies
}) => {
  const navigate = useNavigate();

  // 이메일 정규식
  const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const [error, setError] = useState({
    isError: false,
    errorMsg: '',
  });
  const [isUser, setIsUser] = useState(true);
  const [isCheckEmail, setIsCheckEmail] = useState(false);

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');


  /**
   * 이메일 형식 확인 함수
   */
  const checkEmail = () => {
    if (emailRegex.test(email) === false) {
      // 이메일 형식 맞지 않음
      setIsCheckEmail(false);
      return;
    }
    setIsCheckEmail(true);
  }

  /**
   * 회원, 상담사 로그인 전환 함수
   */
  const toggleUserSignIn = () => {
    setIsUser(!isUser);
  }

  /**
   * 로그인 함수
   */
  const onKeyEnter = (e) => {
    if (e.key === 'Enter') {
      SignIn();
    }
  }

  const SignIn = async () => {
    if (!isCheckEmail || pw.length < 0) {
      // TODO: 로그인 불가 알림
      setError({
        isError: true,
        errorMsg: '이메일과 비밀번호 형식을 다시 한번 확인 해주시기 바랍니다.'
      });
      return;
    }

    const body = {
      email,
      pw
    };

    const result = isUser ? await API.postSignin(body) : await API.postCounselorSignin(body);
    if (result.status === 401) {
      // 로그인 실패
      setError({
        isError: true,
        errorMsg: '로그인에 실패하였습니다.'
      });
      return;
    }

    if (result.status === 500) {
      // 에러 발생
      setError({
        isError: true,
        errorMsg: '로그인 중 에러가 발생하였습니다.'
      });
      return;
    }

    setCookies(result.data);
    isUser ? navigate('/') : navigate('/counselor');
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
    <SignInPresenter
      isUser={isUser}
      isCheckEmail={isCheckEmail}

      setEmail={setEmail}
      setPw={setPw}
      checkEmail={checkEmail}

      toggleUserSignIn={toggleUserSignIn}
      onKeyEnter={onKeyEnter}
      SignIn={SignIn}

      error={error}
      checkError={checkError}
    />
  )
}

export default SignInContainer;