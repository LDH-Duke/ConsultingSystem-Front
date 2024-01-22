import React, { useState } from "react";
import { SignupPresenter } from "./SignupPresenter";
import API from "../../../api/API";
import { useNavigate } from "react-router-dom";

const SignupContainer = () => {
    const navigate = useNavigate()
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [pw2, setPw2] = useState('')
    const [nickname, setNickname] = useState('')
    const [tel, setTel] = useState('')

    const onSubmit = () => {
      console.log('아이디:', id)
      console.log('비밀번호:', pw)
      console.log('비밀번호 확인:', pw2)
      console.log('닉네임:', nickname)
      console.log('전화번호:', tel)

      // 비밀번호 일치 확인
      if (pw !== pw2) {
        console.log('비밀번호가 일치하지 않습니다.')
        return;
      }

      // 이메일 양식 확인
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(id)) {
        console.log('올바른 이메일 형식이 아닙니다.')
        return;
      }

      // 전화번호 확인
      if (tel.length !== 11) {
        console.log('전화번호 양식에 맞게 다시 입력해 주세요.')
        return;
      }

      const signupinfo = API.postsignup({id, pw, nickname, tel})
      console.log(signupinfo)
    }

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
        <SignupPresenter options = {options} setId={setId} setPw={setPw} setPw2={setPw2}
        setNickname={setNickname} setTel={setTel} onSubmit={onSubmit}/>
    )
}

export default SignupContainer;