import React, { useEffect, useState } from "react";
import { SignInPresenter } from "./SignInPresenter";
import API from "../../../../api/API";
import { useNavigate } from "react-router-dom";

const SignInContainer = ({
  setCookies
}) => {
  // 이메일 정규식
  const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const navigate = useNavigate();

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

      return;
    }

    const body = {
      email,
      pw
    };

    const result = isUser ? await API.postSignin(body) : await API.postCounselorSignin(body);
    
    switch (result) {
      case 401:
        //  로그인 실패
        
        break;
        default:
          // 로그인 성공
          setCookies(result.data);
          isUser ? navigate('/') : navigate('/counselor');
        break;
    }
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
    />
  )
}

export default SignInContainer;