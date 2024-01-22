import React, { useEffect, useState } from "react";
import { SignupPresenter } from "./SignupPresenter";
import API from "../../../api/API";
import { useNavigate } from "react-router-dom";

const SignupContainer = () => {
    
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    // const [pw2, setPw2] = useState('')   // pw2 -> pwCheck 으로 변경
    const [pwCheck, setPwCheck] = useState('');
    const [nickname, setNickname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [isEmail, setIsEmail] = useState(1);
    const [isId, setIsId] = useState(1);
    const [isPw, setIsPw] = useState(1);
    const [isCheck, setIsCheck] = useState(1);
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate()



    /**
     *  이메일 정규식
     */
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const emailRegex = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;


    /**
     * 회원가입 빈칸 확인
     */
    const checkIsActiveButton = () => {
      setIsActive(isId && isPw && nickname && tel && isCheck !== 0);
    }

    /**
     *  id 입력 시 state 변경
     */
    const handleIdChange = (id) => {
      setId(id);
      checkIsActiveButton();
    }



    /**
     * id 중복 handler
     */
    const handleIdCheck = async() => {
      const headers = {
        'Content-Type': 'application/json',
      }
      const data = {
        'account': id,
      }
      console.log(data)

      const result = await API.IdCheck(data, headers)

      if (result.code == 409) {
        setIsId(0)
      } else if (result.code == 200) {
        setIsId(1)
      }
      setIsCheck(1)
      checkIsActiveButton();
    }



    /**
     * pw 입력 시 state 변경
     */
    const handlePwChange = (pw) => {
      setPw(pw);
      checkIsActiveButton();
    }
    const handlePwCheckChange = (pw) => {
      setPwCheck(pw);
      checkIsActiveButton();
    }



    /**
     * 비밀번호 일치 확인
     */
    const handlePwCheck = () => {
      if (pw !== pwCheck) {
        setIsPw(0)
        console.log('비밀번호가 일치하지 않습니다.')
        return;
      }

      setIsPw(1)
      checkIsActiveButton();
    }



    /**
     * 닉네임 입력 시 state 변경
     */
    const handleNicknameChange = (nickname) => {
      setNickname(nickname)
    }

    // 전화번호 입력 시 state 변경
    const handleTelChange = (tel) => {
      setTel(tel)
    }



    /**
     * 전화번호 확인
     * if (tel.length !== 11) {
     * console.log('전화번호 양식에 맞게 다시 입력해 주세요.')
     * return;
     * }
     */



    // 이메일 입력 시 state 변경
    const handleEmailChange = (email) => {
      setEmail(email)
    }

    // 이메일 onBlur 시 유효성 검사
    const handleEmailCheck = () => {
      if (emailRegex.test(email) == false) {
        setIsEmail(0)
        return;
      }
      setIsEmail(1)
      checkIsActiveButton();
    }



    /**
     * 회원가입 빈칸 확인
     */
    // const isActive = id && pw && nickname && tel && isCheck === true;

    const handleSignUp = async() => {
      if(!(isActive)) {
        console.log("빈값 존재")
        return 0;
      }

      const headers = {
        'Content-Type': 'application/json',
      }

      const data = {
          'account': id,
          'pw': pw,
          'nickname': nickname,
          'tel': tel,
          'email': email,
      }

      const result = await API.SignUp(data, headers)
      console.group(result)
      navigate('/sign')
    }

    // const signupinfo = API.postsignup({id, pw, nickname, tel})
    // console.log(signupinfo)

    const options = [
        {
          label: '대한민국 +82',
          value: 'korea',
          emoji: '대한민국',
          desc: '+82',
        },
        {
          label: '미국 +1',
          value: 'usa',
          emoji: '미국',
          desc: '+1'
        },
      ];


    return(
        <SignupPresenter
          isId={isId}
          isEmail={isEmail}
          isPw={isPw}
          isActive={isActive}

          onChangeId={handleIdChange}
          onChangePw={handlePwChange}
          onChangePwCheck={handlePwCheckChange}
          onChangeNickname={handleNicknameChange}
          onChangeTel={handleTelChange}
          onChangeEmail={handleEmailChange}
      
          handleSignUp={handleSignUp}
          handleIdCheck={handleIdCheck}
          handlePwCheck={handlePwCheck}
          handleEmailCheck={handleEmailCheck}

          options = {options}
          setId={setId}
          setPw={setPw}
          setPwCheck={setPwCheck}
          setNickname={setNickname}
          setTel={setTel}/>
    )
}

export default SignupContainer;